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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 5128.0, "series": [{"data": [[0.0, 37.0], [0.1, 41.0], [0.2, 46.0], [0.3, 73.0], [0.4, 80.0], [0.5, 82.0], [0.6, 97.0], [0.7, 113.0], [0.8, 120.0], [0.9, 126.0], [1.0, 128.0], [1.1, 129.0], [1.2, 132.0], [1.3, 133.0], [1.4, 135.0], [1.5, 136.0], [1.6, 136.0], [1.7, 137.0], [1.8, 137.0], [1.9, 138.0], [2.0, 139.0], [2.1, 139.0], [2.2, 140.0], [2.3, 140.0], [2.4, 141.0], [2.5, 142.0], [2.6, 142.0], [2.7, 142.0], [2.8, 143.0], [2.9, 143.0], [3.0, 143.0], [3.1, 143.0], [3.2, 144.0], [3.3, 144.0], [3.4, 144.0], [3.5, 144.0], [3.6, 145.0], [3.7, 145.0], [3.8, 145.0], [3.9, 145.0], [4.0, 146.0], [4.1, 146.0], [4.2, 146.0], [4.3, 147.0], [4.4, 147.0], [4.5, 147.0], [4.6, 147.0], [4.7, 148.0], [4.8, 148.0], [4.9, 148.0], [5.0, 149.0], [5.1, 149.0], [5.2, 149.0], [5.3, 149.0], [5.4, 149.0], [5.5, 149.0], [5.6, 150.0], [5.7, 150.0], [5.8, 150.0], [5.9, 150.0], [6.0, 150.0], [6.1, 151.0], [6.2, 151.0], [6.3, 151.0], [6.4, 151.0], [6.5, 151.0], [6.6, 152.0], [6.7, 152.0], [6.8, 152.0], [6.9, 152.0], [7.0, 152.0], [7.1, 153.0], [7.2, 153.0], [7.3, 153.0], [7.4, 153.0], [7.5, 153.0], [7.6, 154.0], [7.7, 154.0], [7.8, 154.0], [7.9, 154.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 155.0], [8.4, 155.0], [8.5, 155.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 155.0], [9.0, 156.0], [9.1, 156.0], [9.2, 156.0], [9.3, 156.0], [9.4, 156.0], [9.5, 156.0], [9.6, 157.0], [9.7, 157.0], [9.8, 157.0], [9.9, 157.0], [10.0, 157.0], [10.1, 157.0], [10.2, 157.0], [10.3, 157.0], [10.4, 158.0], [10.5, 158.0], [10.6, 158.0], [10.7, 158.0], [10.8, 158.0], [10.9, 158.0], [11.0, 158.0], [11.1, 158.0], [11.2, 159.0], [11.3, 159.0], [11.4, 159.0], [11.5, 159.0], [11.6, 159.0], [11.7, 160.0], [11.8, 160.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 160.0], [12.4, 161.0], [12.5, 161.0], [12.6, 161.0], [12.7, 161.0], [12.8, 161.0], [12.9, 161.0], [13.0, 161.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 162.0], [13.6, 162.0], [13.7, 163.0], [13.8, 163.0], [13.9, 163.0], [14.0, 163.0], [14.1, 163.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 164.0], [14.6, 164.0], [14.7, 165.0], [14.8, 165.0], [14.9, 165.0], [15.0, 165.0], [15.1, 165.0], [15.2, 165.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 167.0], [15.8, 167.0], [15.9, 167.0], [16.0, 167.0], [16.1, 168.0], [16.2, 168.0], [16.3, 168.0], [16.4, 168.0], [16.5, 169.0], [16.6, 169.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 170.0], [17.1, 170.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 171.0], [17.6, 171.0], [17.7, 171.0], [17.8, 172.0], [17.9, 172.0], [18.0, 172.0], [18.1, 172.0], [18.2, 172.0], [18.3, 173.0], [18.4, 173.0], [18.5, 173.0], [18.6, 174.0], [18.7, 174.0], [18.8, 174.0], [18.9, 175.0], [19.0, 175.0], [19.1, 176.0], [19.2, 176.0], [19.3, 177.0], [19.4, 178.0], [19.5, 178.0], [19.6, 179.0], [19.7, 180.0], [19.8, 181.0], [19.9, 181.0], [20.0, 182.0], [20.1, 183.0], [20.2, 183.0], [20.3, 184.0], [20.4, 185.0], [20.5, 186.0], [20.6, 187.0], [20.7, 188.0], [20.8, 188.0], [20.9, 189.0], [21.0, 189.0], [21.1, 191.0], [21.2, 192.0], [21.3, 193.0], [21.4, 196.0], [21.5, 199.0], [21.6, 199.0], [21.7, 201.0], [21.8, 202.0], [21.9, 205.0], [22.0, 206.0], [22.1, 207.0], [22.2, 209.0], [22.3, 210.0], [22.4, 212.0], [22.5, 214.0], [22.6, 216.0], [22.7, 218.0], [22.8, 219.0], [22.9, 220.0], [23.0, 221.0], [23.1, 224.0], [23.2, 226.0], [23.3, 227.0], [23.4, 228.0], [23.5, 228.0], [23.6, 229.0], [23.7, 230.0], [23.8, 232.0], [23.9, 233.0], [24.0, 234.0], [24.1, 235.0], [24.2, 237.0], [24.3, 237.0], [24.4, 239.0], [24.5, 240.0], [24.6, 240.0], [24.7, 241.0], [24.8, 242.0], [24.9, 242.0], [25.0, 243.0], [25.1, 245.0], [25.2, 246.0], [25.3, 247.0], [25.4, 248.0], [25.5, 249.0], [25.6, 251.0], [25.7, 251.0], [25.8, 251.0], [25.9, 252.0], [26.0, 252.0], [26.1, 252.0], [26.2, 253.0], [26.3, 254.0], [26.4, 254.0], [26.5, 254.0], [26.6, 254.0], [26.7, 255.0], [26.8, 256.0], [26.9, 256.0], [27.0, 257.0], [27.1, 258.0], [27.2, 258.0], [27.3, 259.0], [27.4, 260.0], [27.5, 260.0], [27.6, 261.0], [27.7, 261.0], [27.8, 262.0], [27.9, 263.0], [28.0, 263.0], [28.1, 264.0], [28.2, 265.0], [28.3, 266.0], [28.4, 266.0], [28.5, 267.0], [28.6, 267.0], [28.7, 268.0], [28.8, 268.0], [28.9, 269.0], [29.0, 270.0], [29.1, 271.0], [29.2, 271.0], [29.3, 272.0], [29.4, 273.0], [29.5, 273.0], [29.6, 274.0], [29.7, 275.0], [29.8, 276.0], [29.9, 276.0], [30.0, 277.0], [30.1, 278.0], [30.2, 279.0], [30.3, 280.0], [30.4, 280.0], [30.5, 280.0], [30.6, 282.0], [30.7, 282.0], [30.8, 284.0], [30.9, 285.0], [31.0, 286.0], [31.1, 287.0], [31.2, 288.0], [31.3, 289.0], [31.4, 290.0], [31.5, 291.0], [31.6, 292.0], [31.7, 292.0], [31.8, 293.0], [31.9, 294.0], [32.0, 295.0], [32.1, 296.0], [32.2, 297.0], [32.3, 298.0], [32.4, 299.0], [32.5, 299.0], [32.6, 300.0], [32.7, 301.0], [32.8, 302.0], [32.9, 303.0], [33.0, 305.0], [33.1, 306.0], [33.2, 307.0], [33.3, 309.0], [33.4, 310.0], [33.5, 311.0], [33.6, 312.0], [33.7, 313.0], [33.8, 315.0], [33.9, 316.0], [34.0, 317.0], [34.1, 319.0], [34.2, 321.0], [34.3, 321.0], [34.4, 324.0], [34.5, 325.0], [34.6, 326.0], [34.7, 328.0], [34.8, 329.0], [34.9, 330.0], [35.0, 331.0], [35.1, 332.0], [35.2, 333.0], [35.3, 334.0], [35.4, 335.0], [35.5, 336.0], [35.6, 338.0], [35.7, 339.0], [35.8, 341.0], [35.9, 343.0], [36.0, 344.0], [36.1, 346.0], [36.2, 346.0], [36.3, 347.0], [36.4, 349.0], [36.5, 351.0], [36.6, 351.0], [36.7, 352.0], [36.8, 353.0], [36.9, 355.0], [37.0, 356.0], [37.1, 357.0], [37.2, 358.0], [37.3, 360.0], [37.4, 361.0], [37.5, 362.0], [37.6, 364.0], [37.7, 365.0], [37.8, 367.0], [37.9, 368.0], [38.0, 369.0], [38.1, 371.0], [38.2, 371.0], [38.3, 372.0], [38.4, 373.0], [38.5, 374.0], [38.6, 377.0], [38.7, 378.0], [38.8, 379.0], [38.9, 381.0], [39.0, 383.0], [39.1, 385.0], [39.2, 386.0], [39.3, 387.0], [39.4, 390.0], [39.5, 391.0], [39.6, 393.0], [39.7, 395.0], [39.8, 396.0], [39.9, 397.0], [40.0, 399.0], [40.1, 400.0], [40.2, 401.0], [40.3, 403.0], [40.4, 405.0], [40.5, 408.0], [40.6, 410.0], [40.7, 412.0], [40.8, 413.0], [40.9, 414.0], [41.0, 415.0], [41.1, 417.0], [41.2, 418.0], [41.3, 419.0], [41.4, 420.0], [41.5, 422.0], [41.6, 423.0], [41.7, 425.0], [41.8, 426.0], [41.9, 427.0], [42.0, 429.0], [42.1, 431.0], [42.2, 432.0], [42.3, 433.0], [42.4, 434.0], [42.5, 435.0], [42.6, 436.0], [42.7, 438.0], [42.8, 440.0], [42.9, 443.0], [43.0, 443.0], [43.1, 446.0], [43.2, 448.0], [43.3, 450.0], [43.4, 452.0], [43.5, 453.0], [43.6, 456.0], [43.7, 457.0], [43.8, 459.0], [43.9, 462.0], [44.0, 464.0], [44.1, 465.0], [44.2, 468.0], [44.3, 471.0], [44.4, 472.0], [44.5, 472.0], [44.6, 474.0], [44.7, 475.0], [44.8, 477.0], [44.9, 479.0], [45.0, 481.0], [45.1, 482.0], [45.2, 483.0], [45.3, 485.0], [45.4, 485.0], [45.5, 487.0], [45.6, 487.0], [45.7, 488.0], [45.8, 489.0], [45.9, 490.0], [46.0, 490.0], [46.1, 493.0], [46.2, 495.0], [46.3, 497.0], [46.4, 499.0], [46.5, 501.0], [46.6, 506.0], [46.7, 508.0], [46.8, 509.0], [46.9, 512.0], [47.0, 514.0], [47.1, 514.0], [47.2, 516.0], [47.3, 519.0], [47.4, 522.0], [47.5, 525.0], [47.6, 526.0], [47.7, 526.0], [47.8, 528.0], [47.9, 529.0], [48.0, 531.0], [48.1, 533.0], [48.2, 535.0], [48.3, 536.0], [48.4, 538.0], [48.5, 539.0], [48.6, 542.0], [48.7, 543.0], [48.8, 548.0], [48.9, 549.0], [49.0, 551.0], [49.1, 553.0], [49.2, 555.0], [49.3, 558.0], [49.4, 559.0], [49.5, 561.0], [49.6, 564.0], [49.7, 566.0], [49.8, 567.0], [49.9, 568.0], [50.0, 569.0], [50.1, 570.0], [50.2, 573.0], [50.3, 575.0], [50.4, 578.0], [50.5, 580.0], [50.6, 581.0], [50.7, 582.0], [50.8, 584.0], [50.9, 585.0], [51.0, 587.0], [51.1, 588.0], [51.2, 590.0], [51.3, 592.0], [51.4, 593.0], [51.5, 595.0], [51.6, 597.0], [51.7, 599.0], [51.8, 602.0], [51.9, 603.0], [52.0, 604.0], [52.1, 607.0], [52.2, 609.0], [52.3, 610.0], [52.4, 611.0], [52.5, 613.0], [52.6, 614.0], [52.7, 615.0], [52.8, 617.0], [52.9, 618.0], [53.0, 619.0], [53.1, 620.0], [53.2, 620.0], [53.3, 621.0], [53.4, 622.0], [53.5, 624.0], [53.6, 626.0], [53.7, 627.0], [53.8, 628.0], [53.9, 629.0], [54.0, 631.0], [54.1, 632.0], [54.2, 634.0], [54.3, 636.0], [54.4, 638.0], [54.5, 639.0], [54.6, 642.0], [54.7, 642.0], [54.8, 644.0], [54.9, 645.0], [55.0, 647.0], [55.1, 648.0], [55.2, 650.0], [55.3, 652.0], [55.4, 655.0], [55.5, 656.0], [55.6, 657.0], [55.7, 657.0], [55.8, 658.0], [55.9, 659.0], [56.0, 660.0], [56.1, 661.0], [56.2, 663.0], [56.3, 664.0], [56.4, 665.0], [56.5, 667.0], [56.6, 668.0], [56.7, 672.0], [56.8, 673.0], [56.9, 675.0], [57.0, 677.0], [57.1, 679.0], [57.2, 683.0], [57.3, 684.0], [57.4, 685.0], [57.5, 687.0], [57.6, 691.0], [57.7, 693.0], [57.8, 695.0], [57.9, 696.0], [58.0, 698.0], [58.1, 699.0], [58.2, 700.0], [58.3, 701.0], [58.4, 706.0], [58.5, 709.0], [58.6, 711.0], [58.7, 713.0], [58.8, 715.0], [58.9, 717.0], [59.0, 719.0], [59.1, 722.0], [59.2, 725.0], [59.3, 726.0], [59.4, 727.0], [59.5, 728.0], [59.6, 729.0], [59.7, 731.0], [59.8, 732.0], [59.9, 733.0], [60.0, 735.0], [60.1, 737.0], [60.2, 738.0], [60.3, 740.0], [60.4, 741.0], [60.5, 743.0], [60.6, 745.0], [60.7, 745.0], [60.8, 748.0], [60.9, 750.0], [61.0, 751.0], [61.1, 752.0], [61.2, 754.0], [61.3, 754.0], [61.4, 755.0], [61.5, 758.0], [61.6, 760.0], [61.7, 762.0], [61.8, 763.0], [61.9, 764.0], [62.0, 765.0], [62.1, 766.0], [62.2, 767.0], [62.3, 769.0], [62.4, 770.0], [62.5, 771.0], [62.6, 773.0], [62.7, 774.0], [62.8, 775.0], [62.9, 776.0], [63.0, 777.0], [63.1, 778.0], [63.2, 779.0], [63.3, 780.0], [63.4, 782.0], [63.5, 784.0], [63.6, 785.0], [63.7, 788.0], [63.8, 789.0], [63.9, 791.0], [64.0, 793.0], [64.1, 795.0], [64.2, 796.0], [64.3, 798.0], [64.4, 799.0], [64.5, 800.0], [64.6, 805.0], [64.7, 806.0], [64.8, 807.0], [64.9, 807.0], [65.0, 809.0], [65.1, 809.0], [65.2, 811.0], [65.3, 813.0], [65.4, 816.0], [65.5, 818.0], [65.6, 819.0], [65.7, 821.0], [65.8, 823.0], [65.9, 825.0], [66.0, 826.0], [66.1, 827.0], [66.2, 828.0], [66.3, 830.0], [66.4, 832.0], [66.5, 835.0], [66.6, 836.0], [66.7, 840.0], [66.8, 845.0], [66.9, 847.0], [67.0, 848.0], [67.1, 850.0], [67.2, 851.0], [67.3, 853.0], [67.4, 854.0], [67.5, 858.0], [67.6, 859.0], [67.7, 860.0], [67.8, 861.0], [67.9, 861.0], [68.0, 864.0], [68.1, 865.0], [68.2, 867.0], [68.3, 868.0], [68.4, 869.0], [68.5, 871.0], [68.6, 872.0], [68.7, 877.0], [68.8, 878.0], [68.9, 880.0], [69.0, 881.0], [69.1, 883.0], [69.2, 886.0], [69.3, 889.0], [69.4, 891.0], [69.5, 895.0], [69.6, 897.0], [69.7, 898.0], [69.8, 901.0], [69.9, 906.0], [70.0, 908.0], [70.1, 910.0], [70.2, 912.0], [70.3, 915.0], [70.4, 918.0], [70.5, 920.0], [70.6, 922.0], [70.7, 924.0], [70.8, 928.0], [70.9, 931.0], [71.0, 933.0], [71.1, 935.0], [71.2, 938.0], [71.3, 941.0], [71.4, 947.0], [71.5, 954.0], [71.6, 957.0], [71.7, 960.0], [71.8, 962.0], [71.9, 963.0], [72.0, 968.0], [72.1, 970.0], [72.2, 972.0], [72.3, 974.0], [72.4, 977.0], [72.5, 979.0], [72.6, 986.0], [72.7, 987.0], [72.8, 989.0], [72.9, 993.0], [73.0, 995.0], [73.1, 998.0], [73.2, 1000.0], [73.3, 1006.0], [73.4, 1007.0], [73.5, 1009.0], [73.6, 1011.0], [73.7, 1015.0], [73.8, 1017.0], [73.9, 1020.0], [74.0, 1021.0], [74.1, 1024.0], [74.2, 1027.0], [74.3, 1030.0], [74.4, 1031.0], [74.5, 1036.0], [74.6, 1038.0], [74.7, 1041.0], [74.8, 1043.0], [74.9, 1045.0], [75.0, 1049.0], [75.1, 1052.0], [75.2, 1057.0], [75.3, 1059.0], [75.4, 1063.0], [75.5, 1064.0], [75.6, 1068.0], [75.7, 1070.0], [75.8, 1072.0], [75.9, 1074.0], [76.0, 1076.0], [76.1, 1079.0], [76.2, 1084.0], [76.3, 1089.0], [76.4, 1092.0], [76.5, 1093.0], [76.6, 1096.0], [76.7, 1099.0], [76.8, 1102.0], [76.9, 1104.0], [77.0, 1109.0], [77.1, 1112.0], [77.2, 1114.0], [77.3, 1115.0], [77.4, 1117.0], [77.5, 1125.0], [77.6, 1128.0], [77.7, 1130.0], [77.8, 1131.0], [77.9, 1134.0], [78.0, 1135.0], [78.1, 1136.0], [78.2, 1139.0], [78.3, 1146.0], [78.4, 1150.0], [78.5, 1151.0], [78.6, 1154.0], [78.7, 1157.0], [78.8, 1160.0], [78.9, 1162.0], [79.0, 1165.0], [79.1, 1167.0], [79.2, 1169.0], [79.3, 1171.0], [79.4, 1172.0], [79.5, 1175.0], [79.6, 1176.0], [79.7, 1181.0], [79.8, 1187.0], [79.9, 1189.0], [80.0, 1191.0], [80.1, 1193.0], [80.2, 1200.0], [80.3, 1204.0], [80.4, 1205.0], [80.5, 1212.0], [80.6, 1219.0], [80.7, 1222.0], [80.8, 1225.0], [80.9, 1228.0], [81.0, 1234.0], [81.1, 1241.0], [81.2, 1244.0], [81.3, 1249.0], [81.4, 1252.0], [81.5, 1254.0], [81.6, 1259.0], [81.7, 1262.0], [81.8, 1263.0], [81.9, 1266.0], [82.0, 1269.0], [82.1, 1273.0], [82.2, 1275.0], [82.3, 1279.0], [82.4, 1282.0], [82.5, 1288.0], [82.6, 1292.0], [82.7, 1294.0], [82.8, 1297.0], [82.9, 1300.0], [83.0, 1304.0], [83.1, 1310.0], [83.2, 1314.0], [83.3, 1317.0], [83.4, 1320.0], [83.5, 1323.0], [83.6, 1325.0], [83.7, 1329.0], [83.8, 1331.0], [83.9, 1333.0], [84.0, 1338.0], [84.1, 1344.0], [84.2, 1348.0], [84.3, 1350.0], [84.4, 1353.0], [84.5, 1356.0], [84.6, 1359.0], [84.7, 1361.0], [84.8, 1367.0], [84.9, 1370.0], [85.0, 1380.0], [85.1, 1386.0], [85.2, 1392.0], [85.3, 1394.0], [85.4, 1396.0], [85.5, 1399.0], [85.6, 1404.0], [85.7, 1410.0], [85.8, 1412.0], [85.9, 1416.0], [86.0, 1423.0], [86.1, 1428.0], [86.2, 1430.0], [86.3, 1433.0], [86.4, 1436.0], [86.5, 1442.0], [86.6, 1448.0], [86.7, 1450.0], [86.8, 1456.0], [86.9, 1458.0], [87.0, 1461.0], [87.1, 1465.0], [87.2, 1469.0], [87.3, 1476.0], [87.4, 1481.0], [87.5, 1484.0], [87.6, 1490.0], [87.7, 1491.0], [87.8, 1493.0], [87.9, 1499.0], [88.0, 1504.0], [88.1, 1508.0], [88.2, 1514.0], [88.3, 1519.0], [88.4, 1523.0], [88.5, 1527.0], [88.6, 1532.0], [88.7, 1539.0], [88.8, 1542.0], [88.9, 1545.0], [89.0, 1553.0], [89.1, 1557.0], [89.2, 1560.0], [89.3, 1566.0], [89.4, 1571.0], [89.5, 1575.0], [89.6, 1579.0], [89.7, 1587.0], [89.8, 1591.0], [89.9, 1595.0], [90.0, 1600.0], [90.1, 1602.0], [90.2, 1608.0], [90.3, 1614.0], [90.4, 1624.0], [90.5, 1630.0], [90.6, 1637.0], [90.7, 1646.0], [90.8, 1651.0], [90.9, 1656.0], [91.0, 1664.0], [91.1, 1670.0], [91.2, 1680.0], [91.3, 1686.0], [91.4, 1689.0], [91.5, 1696.0], [91.6, 1702.0], [91.7, 1707.0], [91.8, 1713.0], [91.9, 1717.0], [92.0, 1722.0], [92.1, 1727.0], [92.2, 1732.0], [92.3, 1746.0], [92.4, 1752.0], [92.5, 1756.0], [92.6, 1762.0], [92.7, 1773.0], [92.8, 1779.0], [92.9, 1795.0], [93.0, 1800.0], [93.1, 1805.0], [93.2, 1809.0], [93.3, 1813.0], [93.4, 1817.0], [93.5, 1820.0], [93.6, 1825.0], [93.7, 1832.0], [93.8, 1839.0], [93.9, 1858.0], [94.0, 1863.0], [94.1, 1872.0], [94.2, 1877.0], [94.3, 1887.0], [94.4, 1893.0], [94.5, 1903.0], [94.6, 1916.0], [94.7, 1923.0], [94.8, 1948.0], [94.9, 1955.0], [95.0, 1966.0], [95.1, 1983.0], [95.2, 1991.0], [95.3, 2002.0], [95.4, 2011.0], [95.5, 2032.0], [95.6, 2052.0], [95.7, 2066.0], [95.8, 2074.0], [95.9, 2082.0], [96.0, 2094.0], [96.1, 2118.0], [96.2, 2159.0], [96.3, 2177.0], [96.4, 2194.0], [96.5, 2227.0], [96.6, 2260.0], [96.7, 2286.0], [96.8, 2301.0], [96.9, 2331.0], [97.0, 2379.0], [97.1, 2399.0], [97.2, 2424.0], [97.3, 2452.0], [97.4, 2481.0], [97.5, 2489.0], [97.6, 2515.0], [97.7, 2542.0], [97.8, 2602.0], [97.9, 2613.0], [98.0, 2646.0], [98.1, 2682.0], [98.2, 2711.0], [98.3, 2735.0], [98.4, 2777.0], [98.5, 2834.0], [98.6, 2898.0], [98.7, 2963.0], [98.8, 3005.0], [98.9, 3094.0], [99.0, 3141.0], [99.1, 3175.0], [99.2, 3265.0], [99.3, 3330.0], [99.4, 3395.0], [99.5, 3543.0], [99.6, 3790.0], [99.7, 4384.0], [99.8, 4464.0], [99.9, 4793.0], [100.0, 5128.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1107.0, "series": [{"data": [[0.0, 32.0], [600.0, 338.0], [700.0, 332.0], [800.0, 278.0], [900.0, 182.0], [1000.0, 185.0], [1100.0, 183.0], [1200.0, 143.0], [1300.0, 138.0], [1400.0, 128.0], [1500.0, 107.0], [100.0, 1107.0], [1600.0, 83.0], [1700.0, 75.0], [1800.0, 78.0], [1900.0, 43.0], [2000.0, 40.0], [2100.0, 20.0], [2200.0, 18.0], [2300.0, 18.0], [2400.0, 23.0], [2500.0, 12.0], [2600.0, 21.0], [2800.0, 11.0], [2700.0, 12.0], [2900.0, 7.0], [3000.0, 9.0], [3100.0, 10.0], [200.0, 573.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 3.0], [3600.0, 2.0], [4200.0, 5.0], [4300.0, 1.0], [4400.0, 5.0], [4500.0, 1.0], [4600.0, 1.0], [300.0, 395.0], [4700.0, 3.0], [4800.0, 1.0], [4900.0, 2.0], [5000.0, 1.0], [5100.0, 1.0], [400.0, 335.0], [500.0, 279.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 633.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2443.0, "series": [{"data": [[0.0, 2443.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2186.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 633.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.624999999999996, "minX": 1.60246986E12, "maxY": 12.0, "series": [{"data": [[1.60247004E12, 12.0], [1.60247022E12, 11.80060422960725], [1.60247016E12, 12.0], [1.60246986E12, 11.624999999999996], [1.60246998E12, 12.0], [1.60246992E12, 12.0], [1.6024701E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247022E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 741.0610570501816, "minX": 1.0, "maxY": 4901.0, "series": [{"data": [[4.0, 2298.5], [8.0, 2606.0], [2.0, 4793.0], [1.0, 4793.0], [9.0, 2491.0], [5.0, 2637.0], [10.0, 2270.5], [11.0, 1635.0], [6.0, 1695.3333333333333], [12.0, 741.0610570501816], [3.0, 4901.0], [7.0, 4448.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980045610034246, 748.5876092740423]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 891.1, "minX": 1.60246986E12, "maxY": 1004356.3333333334, "series": [{"data": [[1.60247004E12, 700404.4166666666], [1.60247022E12, 177860.03333333333], [1.60247016E12, 1004356.3333333334], [1.60246986E12, 49693.583333333336], [1.60246998E12, 833246.9833333333], [1.60246992E12, 843113.65], [1.6024701E12, 642243.4333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60247004E12, 9749.816666666668], [1.60247022E12, 2995.8333333333335], [1.60247016E12, 6940.083333333333], [1.60246986E12, 891.1], [1.60246998E12, 7741.75], [1.60246992E12, 6972.333333333333], [1.6024701E12, 10200.033333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247022E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 606.3375420875424, "minX": 1.60246986E12, "maxY": 903.7436868686858, "series": [{"data": [[1.60247004E12, 606.3375420875424], [1.60247022E12, 816.0876132930515], [1.60247016E12, 903.7436868686858], [1.60246986E12, 762.7980769230769], [1.60246998E12, 813.9740112994353], [1.60246992E12, 891.6047381546131], [1.6024701E12, 619.0379310344829]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247022E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 606.0412457912465, "minX": 1.60246986E12, "maxY": 903.1792929292918, "series": [{"data": [[1.60247004E12, 606.0412457912465], [1.60247022E12, 815.815709969788], [1.60247016E12, 903.1792929292918], [1.60246986E12, 762.4807692307693], [1.60246998E12, 813.532203389831], [1.60246992E12, 891.0448877805482], [1.6024701E12, 618.774137931035]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247022E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60246986E12, "maxY": 1.3269230769230778, "series": [{"data": [[1.60247004E12, 0.014309764309764314], [1.60247022E12, 0.0], [1.60247016E12, 0.015151515151515147], [1.60246986E12, 1.3269230769230778], [1.60246998E12, 0.015819209039548022], [1.60246992E12, 0.019950124688279308], [1.6024701E12, 0.010344827586206898]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247022E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.60246986E12, "maxY": 5128.0, "series": [{"data": [[1.60247004E12, 4464.0], [1.60247022E12, 5128.0], [1.60247016E12, 3543.0], [1.60246986E12, 2452.0], [1.60246998E12, 3265.0], [1.60246992E12, 3443.0], [1.6024701E12, 2866.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60247004E12, 45.70099971652031], [1.60247022E12, 142.95199968338014], [1.60247016E12, 138.13699981093407], [1.60246986E12, 81.0], [1.60246998E12, 137.0], [1.60246992E12, 110.68099942564965], [1.6024701E12, 126.89799944639206]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60247004E12, 50.62660068035126], [1.60247022E12, 143.57360006332397], [1.60247016E12, 138.85070007562638], [1.60246986E12, 82.85650047063827], [1.60246998E12, 137.0], [1.60246992E12, 112.84910022974015], [1.6024701E12, 128.98780022144317]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60247004E12, 47.772999149560924], [1.60247022E12, 143.30799992084502], [1.60247016E12, 138.53349990546704], [1.60246986E12, 81.0], [1.60246998E12, 137.0], [1.60246992E12, 111.88549971282482], [1.6024701E12, 128.05899972319602]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60247004E12, 37.0], [1.60247022E12, 129.0], [1.60247016E12, 129.0], [1.60246986E12, 81.0], [1.60246998E12, 136.0], [1.60246992E12, 89.0], [1.6024701E12, 76.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60247004E12, 330.0], [1.60247022E12, 427.0], [1.60247016E12, 745.5], [1.60246986E12, 645.0], [1.60246998E12, 712.0], [1.60246992E12, 767.0], [1.6024701E12, 455.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247022E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 151.0, "minX": 1.0, "maxY": 4793.0, "series": [{"data": [[32.0, 360.5], [2.0, 4349.0], [33.0, 259.5], [34.0, 334.5], [35.0, 320.0], [36.0, 199.0], [37.0, 161.0], [39.0, 270.5], [38.0, 265.5], [43.0, 217.0], [44.0, 279.5], [45.0, 261.5], [47.0, 161.0], [3.0, 2924.0], [48.0, 252.0], [60.0, 151.0], [4.0, 1954.5], [65.0, 175.0], [5.0, 2193.0], [6.0, 1855.0], [7.0, 1431.0], [8.0, 1402.0], [9.0, 1320.0], [10.0, 1134.5], [11.0, 1026.0], [12.0, 969.5], [13.0, 982.5], [14.0, 805.5], [15.0, 742.0], [1.0, 4793.0], [16.0, 645.0], [17.0, 722.0], [18.0, 582.5], [19.0, 620.0], [20.0, 643.0], [21.0, 451.5], [22.0, 511.5], [23.0, 341.0], [24.0, 424.5], [25.0, 325.0], [26.0, 380.5], [27.0, 372.0], [28.0, 376.0], [29.0, 335.0], [30.0, 416.0], [31.0, 318.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 151.0, "minX": 1.0, "maxY": 4793.0, "series": [{"data": [[32.0, 360.5], [2.0, 4348.5], [33.0, 259.5], [34.0, 334.5], [35.0, 320.0], [36.0, 199.0], [37.0, 161.0], [39.0, 270.0], [38.0, 265.5], [43.0, 216.0], [44.0, 279.0], [45.0, 261.5], [47.0, 161.0], [3.0, 2923.0], [48.0, 252.0], [60.0, 151.0], [4.0, 1953.0], [65.0, 175.0], [5.0, 2190.5], [6.0, 1853.5], [7.0, 1431.0], [8.0, 1402.0], [9.0, 1319.0], [10.0, 1134.5], [11.0, 1026.0], [12.0, 969.5], [13.0, 982.5], [14.0, 804.5], [15.0, 742.0], [1.0, 4793.0], [16.0, 645.0], [17.0, 721.0], [18.0, 582.5], [19.0, 619.5], [20.0, 643.0], [21.0, 451.5], [22.0, 511.5], [23.0, 340.0], [24.0, 423.5], [25.0, 325.0], [26.0, 380.5], [27.0, 372.0], [28.0, 375.5], [29.0, 335.0], [30.0, 416.0], [31.0, 318.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60246986E12, "maxY": 19.8, "series": [{"data": [[1.60247004E12, 19.8], [1.60247022E12, 5.316666666666666], [1.60247016E12, 13.2], [1.60246986E12, 1.9333333333333333], [1.60246998E12, 14.75], [1.60246992E12, 13.366666666666667], [1.6024701E12, 19.333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247022E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60246986E12, "maxY": 19.8, "series": [{"data": [[1.60247004E12, 19.8], [1.60247022E12, 5.516666666666667], [1.60247016E12, 13.2], [1.60246986E12, 1.7333333333333334], [1.60246998E12, 14.75], [1.60246992E12, 13.366666666666667], [1.6024701E12, 19.333333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60247022E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60246986E12, "maxY": 19.8, "series": [{"data": [[1.60247004E12, 19.8], [1.60247022E12, 5.516666666666667], [1.60247016E12, 13.2], [1.60246986E12, 1.7333333333333334], [1.60246998E12, 14.75], [1.60246992E12, 13.366666666666667], [1.6024701E12, 19.333333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247022E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.60246986E12, "maxY": 19.8, "series": [{"data": [[1.60247004E12, 19.8], [1.60247022E12, 5.516666666666667], [1.60247016E12, 13.2], [1.60246986E12, 1.7333333333333334], [1.60246998E12, 14.75], [1.60246992E12, 13.366666666666667], [1.6024701E12, 19.333333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60247022E12, "title": "Total Transactions Per Second"}},
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

