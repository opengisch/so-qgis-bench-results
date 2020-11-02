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
        data: {"result": {"minY": 45.0, "minX": 0.0, "maxY": 5036.0, "series": [{"data": [[0.0, 45.0], [0.1, 63.0], [0.2, 81.0], [0.3, 91.0], [0.4, 108.0], [0.5, 112.0], [0.6, 120.0], [0.7, 123.0], [0.8, 128.0], [0.9, 131.0], [1.0, 133.0], [1.1, 134.0], [1.2, 136.0], [1.3, 137.0], [1.4, 137.0], [1.5, 139.0], [1.6, 140.0], [1.7, 140.0], [1.8, 141.0], [1.9, 141.0], [2.0, 142.0], [2.1, 142.0], [2.2, 142.0], [2.3, 143.0], [2.4, 144.0], [2.5, 144.0], [2.6, 144.0], [2.7, 145.0], [2.8, 145.0], [2.9, 146.0], [3.0, 146.0], [3.1, 146.0], [3.2, 146.0], [3.3, 147.0], [3.4, 147.0], [3.5, 148.0], [3.6, 148.0], [3.7, 148.0], [3.8, 148.0], [3.9, 149.0], [4.0, 149.0], [4.1, 149.0], [4.2, 149.0], [4.3, 149.0], [4.4, 149.0], [4.5, 150.0], [4.6, 150.0], [4.7, 150.0], [4.8, 150.0], [4.9, 151.0], [5.0, 151.0], [5.1, 151.0], [5.2, 151.0], [5.3, 151.0], [5.4, 152.0], [5.5, 152.0], [5.6, 152.0], [5.7, 152.0], [5.8, 153.0], [5.9, 153.0], [6.0, 153.0], [6.1, 154.0], [6.2, 154.0], [6.3, 154.0], [6.4, 154.0], [6.5, 154.0], [6.6, 155.0], [6.7, 155.0], [6.8, 155.0], [6.9, 155.0], [7.0, 155.0], [7.1, 156.0], [7.2, 156.0], [7.3, 156.0], [7.4, 156.0], [7.5, 156.0], [7.6, 157.0], [7.7, 157.0], [7.8, 157.0], [7.9, 157.0], [8.0, 158.0], [8.1, 158.0], [8.2, 158.0], [8.3, 158.0], [8.4, 158.0], [8.5, 159.0], [8.6, 159.0], [8.7, 159.0], [8.8, 159.0], [8.9, 160.0], [9.0, 160.0], [9.1, 160.0], [9.2, 160.0], [9.3, 160.0], [9.4, 161.0], [9.5, 161.0], [9.6, 161.0], [9.7, 161.0], [9.8, 162.0], [9.9, 162.0], [10.0, 162.0], [10.1, 162.0], [10.2, 162.0], [10.3, 163.0], [10.4, 163.0], [10.5, 163.0], [10.6, 163.0], [10.7, 163.0], [10.8, 164.0], [10.9, 164.0], [11.0, 164.0], [11.1, 164.0], [11.2, 164.0], [11.3, 165.0], [11.4, 165.0], [11.5, 165.0], [11.6, 165.0], [11.7, 166.0], [11.8, 166.0], [11.9, 166.0], [12.0, 166.0], [12.1, 166.0], [12.2, 166.0], [12.3, 167.0], [12.4, 167.0], [12.5, 167.0], [12.6, 167.0], [12.7, 168.0], [12.8, 168.0], [12.9, 168.0], [13.0, 168.0], [13.1, 168.0], [13.2, 169.0], [13.3, 169.0], [13.4, 169.0], [13.5, 169.0], [13.6, 169.0], [13.7, 170.0], [13.8, 170.0], [13.9, 170.0], [14.0, 170.0], [14.1, 170.0], [14.2, 171.0], [14.3, 171.0], [14.4, 171.0], [14.5, 171.0], [14.6, 172.0], [14.7, 172.0], [14.8, 172.0], [14.9, 172.0], [15.0, 172.0], [15.1, 173.0], [15.2, 173.0], [15.3, 173.0], [15.4, 173.0], [15.5, 173.0], [15.6, 174.0], [15.7, 174.0], [15.8, 174.0], [15.9, 174.0], [16.0, 175.0], [16.1, 175.0], [16.2, 175.0], [16.3, 176.0], [16.4, 176.0], [16.5, 177.0], [16.6, 177.0], [16.7, 177.0], [16.8, 178.0], [16.9, 178.0], [17.0, 178.0], [17.1, 178.0], [17.2, 179.0], [17.3, 179.0], [17.4, 179.0], [17.5, 180.0], [17.6, 180.0], [17.7, 180.0], [17.8, 180.0], [17.9, 181.0], [18.0, 181.0], [18.1, 181.0], [18.2, 182.0], [18.3, 182.0], [18.4, 182.0], [18.5, 183.0], [18.6, 183.0], [18.7, 184.0], [18.8, 184.0], [18.9, 185.0], [19.0, 186.0], [19.1, 187.0], [19.2, 187.0], [19.3, 188.0], [19.4, 189.0], [19.5, 189.0], [19.6, 190.0], [19.7, 190.0], [19.8, 191.0], [19.9, 192.0], [20.0, 192.0], [20.1, 193.0], [20.2, 193.0], [20.3, 194.0], [20.4, 195.0], [20.5, 196.0], [20.6, 196.0], [20.7, 198.0], [20.8, 198.0], [20.9, 199.0], [21.0, 201.0], [21.1, 201.0], [21.2, 202.0], [21.3, 202.0], [21.4, 203.0], [21.5, 204.0], [21.6, 205.0], [21.7, 207.0], [21.8, 208.0], [21.9, 211.0], [22.0, 212.0], [22.1, 214.0], [22.2, 215.0], [22.3, 216.0], [22.4, 217.0], [22.5, 218.0], [22.6, 220.0], [22.7, 221.0], [22.8, 222.0], [22.9, 223.0], [23.0, 226.0], [23.1, 227.0], [23.2, 228.0], [23.3, 230.0], [23.4, 231.0], [23.5, 233.0], [23.6, 235.0], [23.7, 236.0], [23.8, 238.0], [23.9, 239.0], [24.0, 240.0], [24.1, 241.0], [24.2, 242.0], [24.3, 244.0], [24.4, 245.0], [24.5, 247.0], [24.6, 248.0], [24.7, 249.0], [24.8, 250.0], [24.9, 251.0], [25.0, 252.0], [25.1, 252.0], [25.2, 253.0], [25.3, 254.0], [25.4, 255.0], [25.5, 255.0], [25.6, 257.0], [25.7, 257.0], [25.8, 258.0], [25.9, 259.0], [26.0, 259.0], [26.1, 260.0], [26.2, 260.0], [26.3, 261.0], [26.4, 261.0], [26.5, 263.0], [26.6, 264.0], [26.7, 265.0], [26.8, 266.0], [26.9, 266.0], [27.0, 268.0], [27.1, 269.0], [27.2, 269.0], [27.3, 270.0], [27.4, 271.0], [27.5, 271.0], [27.6, 272.0], [27.7, 273.0], [27.8, 274.0], [27.9, 274.0], [28.0, 275.0], [28.1, 276.0], [28.2, 277.0], [28.3, 278.0], [28.4, 278.0], [28.5, 279.0], [28.6, 279.0], [28.7, 280.0], [28.8, 280.0], [28.9, 280.0], [29.0, 281.0], [29.1, 283.0], [29.2, 283.0], [29.3, 285.0], [29.4, 285.0], [29.5, 287.0], [29.6, 287.0], [29.7, 288.0], [29.8, 289.0], [29.9, 289.0], [30.0, 290.0], [30.1, 291.0], [30.2, 292.0], [30.3, 294.0], [30.4, 294.0], [30.5, 295.0], [30.6, 296.0], [30.7, 296.0], [30.8, 297.0], [30.9, 298.0], [31.0, 299.0], [31.1, 300.0], [31.2, 301.0], [31.3, 302.0], [31.4, 303.0], [31.5, 304.0], [31.6, 304.0], [31.7, 305.0], [31.8, 306.0], [31.9, 307.0], [32.0, 308.0], [32.1, 309.0], [32.2, 310.0], [32.3, 311.0], [32.4, 313.0], [32.5, 314.0], [32.6, 315.0], [32.7, 316.0], [32.8, 317.0], [32.9, 319.0], [33.0, 320.0], [33.1, 321.0], [33.2, 322.0], [33.3, 323.0], [33.4, 323.0], [33.5, 324.0], [33.6, 324.0], [33.7, 325.0], [33.8, 326.0], [33.9, 328.0], [34.0, 329.0], [34.1, 331.0], [34.2, 332.0], [34.3, 333.0], [34.4, 333.0], [34.5, 335.0], [34.6, 336.0], [34.7, 336.0], [34.8, 337.0], [34.9, 338.0], [35.0, 339.0], [35.1, 342.0], [35.2, 343.0], [35.3, 345.0], [35.4, 346.0], [35.5, 347.0], [35.6, 348.0], [35.7, 349.0], [35.8, 351.0], [35.9, 353.0], [36.0, 354.0], [36.1, 357.0], [36.2, 359.0], [36.3, 360.0], [36.4, 362.0], [36.5, 363.0], [36.6, 364.0], [36.7, 367.0], [36.8, 368.0], [36.9, 370.0], [37.0, 371.0], [37.1, 374.0], [37.2, 375.0], [37.3, 377.0], [37.4, 379.0], [37.5, 380.0], [37.6, 382.0], [37.7, 383.0], [37.8, 385.0], [37.9, 387.0], [38.0, 387.0], [38.1, 390.0], [38.2, 392.0], [38.3, 394.0], [38.4, 396.0], [38.5, 398.0], [38.6, 399.0], [38.7, 400.0], [38.8, 401.0], [38.9, 403.0], [39.0, 405.0], [39.1, 407.0], [39.2, 409.0], [39.3, 411.0], [39.4, 414.0], [39.5, 415.0], [39.6, 417.0], [39.7, 420.0], [39.8, 421.0], [39.9, 425.0], [40.0, 426.0], [40.1, 427.0], [40.2, 429.0], [40.3, 431.0], [40.4, 434.0], [40.5, 435.0], [40.6, 435.0], [40.7, 437.0], [40.8, 438.0], [40.9, 441.0], [41.0, 442.0], [41.1, 443.0], [41.2, 444.0], [41.3, 445.0], [41.4, 448.0], [41.5, 450.0], [41.6, 453.0], [41.7, 455.0], [41.8, 456.0], [41.9, 457.0], [42.0, 459.0], [42.1, 460.0], [42.2, 461.0], [42.3, 462.0], [42.4, 465.0], [42.5, 465.0], [42.6, 466.0], [42.7, 468.0], [42.8, 469.0], [42.9, 470.0], [43.0, 471.0], [43.1, 472.0], [43.2, 474.0], [43.3, 474.0], [43.4, 475.0], [43.5, 477.0], [43.6, 478.0], [43.7, 480.0], [43.8, 481.0], [43.9, 484.0], [44.0, 485.0], [44.1, 486.0], [44.2, 487.0], [44.3, 489.0], [44.4, 491.0], [44.5, 492.0], [44.6, 493.0], [44.7, 496.0], [44.8, 498.0], [44.9, 499.0], [45.0, 501.0], [45.1, 504.0], [45.2, 505.0], [45.3, 507.0], [45.4, 508.0], [45.5, 509.0], [45.6, 511.0], [45.7, 514.0], [45.8, 514.0], [45.9, 516.0], [46.0, 516.0], [46.1, 517.0], [46.2, 520.0], [46.3, 522.0], [46.4, 523.0], [46.5, 523.0], [46.6, 526.0], [46.7, 527.0], [46.8, 529.0], [46.9, 530.0], [47.0, 532.0], [47.1, 532.0], [47.2, 534.0], [47.3, 535.0], [47.4, 536.0], [47.5, 537.0], [47.6, 540.0], [47.7, 543.0], [47.8, 546.0], [47.9, 548.0], [48.0, 549.0], [48.1, 551.0], [48.2, 553.0], [48.3, 556.0], [48.4, 557.0], [48.5, 558.0], [48.6, 559.0], [48.7, 560.0], [48.8, 562.0], [48.9, 564.0], [49.0, 565.0], [49.1, 567.0], [49.2, 569.0], [49.3, 570.0], [49.4, 573.0], [49.5, 575.0], [49.6, 576.0], [49.7, 578.0], [49.8, 582.0], [49.9, 584.0], [50.0, 585.0], [50.1, 586.0], [50.2, 587.0], [50.3, 588.0], [50.4, 589.0], [50.5, 591.0], [50.6, 592.0], [50.7, 594.0], [50.8, 596.0], [50.9, 597.0], [51.0, 598.0], [51.1, 599.0], [51.2, 603.0], [51.3, 605.0], [51.4, 606.0], [51.5, 607.0], [51.6, 610.0], [51.7, 611.0], [51.8, 612.0], [51.9, 613.0], [52.0, 615.0], [52.1, 618.0], [52.2, 620.0], [52.3, 621.0], [52.4, 622.0], [52.5, 623.0], [52.6, 624.0], [52.7, 625.0], [52.8, 626.0], [52.9, 629.0], [53.0, 630.0], [53.1, 631.0], [53.2, 632.0], [53.3, 634.0], [53.4, 635.0], [53.5, 636.0], [53.6, 637.0], [53.7, 639.0], [53.8, 640.0], [53.9, 640.0], [54.0, 642.0], [54.1, 645.0], [54.2, 646.0], [54.3, 647.0], [54.4, 649.0], [54.5, 651.0], [54.6, 653.0], [54.7, 655.0], [54.8, 658.0], [54.9, 659.0], [55.0, 662.0], [55.1, 663.0], [55.2, 665.0], [55.3, 666.0], [55.4, 669.0], [55.5, 670.0], [55.6, 671.0], [55.7, 673.0], [55.8, 674.0], [55.9, 677.0], [56.0, 678.0], [56.1, 679.0], [56.2, 681.0], [56.3, 685.0], [56.4, 688.0], [56.5, 692.0], [56.6, 695.0], [56.7, 696.0], [56.8, 699.0], [56.9, 701.0], [57.0, 705.0], [57.1, 708.0], [57.2, 709.0], [57.3, 711.0], [57.4, 712.0], [57.5, 713.0], [57.6, 716.0], [57.7, 718.0], [57.8, 720.0], [57.9, 721.0], [58.0, 723.0], [58.1, 724.0], [58.2, 726.0], [58.3, 727.0], [58.4, 730.0], [58.5, 732.0], [58.6, 733.0], [58.7, 734.0], [58.8, 735.0], [58.9, 736.0], [59.0, 738.0], [59.1, 740.0], [59.2, 741.0], [59.3, 742.0], [59.4, 744.0], [59.5, 746.0], [59.6, 748.0], [59.7, 749.0], [59.8, 751.0], [59.9, 753.0], [60.0, 754.0], [60.1, 756.0], [60.2, 757.0], [60.3, 759.0], [60.4, 760.0], [60.5, 761.0], [60.6, 762.0], [60.7, 764.0], [60.8, 765.0], [60.9, 766.0], [61.0, 768.0], [61.1, 771.0], [61.2, 774.0], [61.3, 775.0], [61.4, 776.0], [61.5, 778.0], [61.6, 780.0], [61.7, 782.0], [61.8, 783.0], [61.9, 785.0], [62.0, 786.0], [62.1, 787.0], [62.2, 788.0], [62.3, 791.0], [62.4, 793.0], [62.5, 795.0], [62.6, 799.0], [62.7, 800.0], [62.8, 801.0], [62.9, 803.0], [63.0, 805.0], [63.1, 807.0], [63.2, 807.0], [63.3, 809.0], [63.4, 813.0], [63.5, 814.0], [63.6, 816.0], [63.7, 818.0], [63.8, 820.0], [63.9, 822.0], [64.0, 823.0], [64.1, 824.0], [64.2, 827.0], [64.3, 829.0], [64.4, 830.0], [64.5, 831.0], [64.6, 832.0], [64.7, 834.0], [64.8, 835.0], [64.9, 835.0], [65.0, 837.0], [65.1, 840.0], [65.2, 840.0], [65.3, 841.0], [65.4, 842.0], [65.5, 843.0], [65.6, 845.0], [65.7, 847.0], [65.8, 848.0], [65.9, 849.0], [66.0, 851.0], [66.1, 852.0], [66.2, 853.0], [66.3, 855.0], [66.4, 856.0], [66.5, 856.0], [66.6, 858.0], [66.7, 858.0], [66.8, 861.0], [66.9, 865.0], [67.0, 867.0], [67.1, 871.0], [67.2, 874.0], [67.3, 878.0], [67.4, 878.0], [67.5, 880.0], [67.6, 882.0], [67.7, 882.0], [67.8, 884.0], [67.9, 886.0], [68.0, 892.0], [68.1, 893.0], [68.2, 895.0], [68.3, 897.0], [68.4, 900.0], [68.5, 901.0], [68.6, 903.0], [68.7, 905.0], [68.8, 907.0], [68.9, 910.0], [69.0, 911.0], [69.1, 913.0], [69.2, 916.0], [69.3, 918.0], [69.4, 920.0], [69.5, 925.0], [69.6, 928.0], [69.7, 930.0], [69.8, 932.0], [69.9, 935.0], [70.0, 936.0], [70.1, 937.0], [70.2, 939.0], [70.3, 942.0], [70.4, 945.0], [70.5, 946.0], [70.6, 947.0], [70.7, 950.0], [70.8, 953.0], [70.9, 954.0], [71.0, 955.0], [71.1, 960.0], [71.2, 963.0], [71.3, 965.0], [71.4, 969.0], [71.5, 969.0], [71.6, 971.0], [71.7, 973.0], [71.8, 978.0], [71.9, 980.0], [72.0, 983.0], [72.1, 987.0], [72.2, 988.0], [72.3, 990.0], [72.4, 993.0], [72.5, 997.0], [72.6, 1004.0], [72.7, 1006.0], [72.8, 1009.0], [72.9, 1012.0], [73.0, 1014.0], [73.1, 1018.0], [73.2, 1020.0], [73.3, 1022.0], [73.4, 1024.0], [73.5, 1027.0], [73.6, 1029.0], [73.7, 1036.0], [73.8, 1042.0], [73.9, 1046.0], [74.0, 1049.0], [74.1, 1051.0], [74.2, 1055.0], [74.3, 1056.0], [74.4, 1058.0], [74.5, 1061.0], [74.6, 1064.0], [74.7, 1065.0], [74.8, 1067.0], [74.9, 1070.0], [75.0, 1070.0], [75.1, 1073.0], [75.2, 1075.0], [75.3, 1078.0], [75.4, 1081.0], [75.5, 1083.0], [75.6, 1086.0], [75.7, 1089.0], [75.8, 1090.0], [75.9, 1092.0], [76.0, 1096.0], [76.1, 1102.0], [76.2, 1105.0], [76.3, 1106.0], [76.4, 1110.0], [76.5, 1114.0], [76.6, 1118.0], [76.7, 1121.0], [76.8, 1126.0], [76.9, 1128.0], [77.0, 1132.0], [77.1, 1133.0], [77.2, 1135.0], [77.3, 1138.0], [77.4, 1139.0], [77.5, 1142.0], [77.6, 1143.0], [77.7, 1146.0], [77.8, 1149.0], [77.9, 1150.0], [78.0, 1152.0], [78.1, 1153.0], [78.2, 1155.0], [78.3, 1157.0], [78.4, 1159.0], [78.5, 1161.0], [78.6, 1162.0], [78.7, 1164.0], [78.8, 1168.0], [78.9, 1170.0], [79.0, 1172.0], [79.1, 1174.0], [79.2, 1175.0], [79.3, 1177.0], [79.4, 1181.0], [79.5, 1183.0], [79.6, 1186.0], [79.7, 1187.0], [79.8, 1190.0], [79.9, 1193.0], [80.0, 1197.0], [80.1, 1199.0], [80.2, 1203.0], [80.3, 1208.0], [80.4, 1213.0], [80.5, 1215.0], [80.6, 1218.0], [80.7, 1222.0], [80.8, 1224.0], [80.9, 1226.0], [81.0, 1230.0], [81.1, 1233.0], [81.2, 1236.0], [81.3, 1241.0], [81.4, 1244.0], [81.5, 1251.0], [81.6, 1255.0], [81.7, 1259.0], [81.8, 1265.0], [81.9, 1266.0], [82.0, 1271.0], [82.1, 1272.0], [82.2, 1274.0], [82.3, 1279.0], [82.4, 1283.0], [82.5, 1288.0], [82.6, 1293.0], [82.7, 1295.0], [82.8, 1300.0], [82.9, 1308.0], [83.0, 1312.0], [83.1, 1313.0], [83.2, 1316.0], [83.3, 1320.0], [83.4, 1326.0], [83.5, 1329.0], [83.6, 1332.0], [83.7, 1333.0], [83.8, 1334.0], [83.9, 1338.0], [84.0, 1341.0], [84.1, 1345.0], [84.2, 1355.0], [84.3, 1358.0], [84.4, 1364.0], [84.5, 1367.0], [84.6, 1368.0], [84.7, 1373.0], [84.8, 1380.0], [84.9, 1386.0], [85.0, 1390.0], [85.1, 1394.0], [85.2, 1396.0], [85.3, 1399.0], [85.4, 1405.0], [85.5, 1409.0], [85.6, 1412.0], [85.7, 1414.0], [85.8, 1417.0], [85.9, 1424.0], [86.0, 1429.0], [86.1, 1432.0], [86.2, 1435.0], [86.3, 1439.0], [86.4, 1440.0], [86.5, 1442.0], [86.6, 1446.0], [86.7, 1450.0], [86.8, 1453.0], [86.9, 1457.0], [87.0, 1459.0], [87.1, 1465.0], [87.2, 1469.0], [87.3, 1474.0], [87.4, 1480.0], [87.5, 1484.0], [87.6, 1492.0], [87.7, 1494.0], [87.8, 1498.0], [87.9, 1500.0], [88.0, 1503.0], [88.1, 1507.0], [88.2, 1515.0], [88.3, 1520.0], [88.4, 1527.0], [88.5, 1533.0], [88.6, 1540.0], [88.7, 1543.0], [88.8, 1546.0], [88.9, 1550.0], [89.0, 1555.0], [89.1, 1557.0], [89.2, 1567.0], [89.3, 1572.0], [89.4, 1576.0], [89.5, 1578.0], [89.6, 1582.0], [89.7, 1592.0], [89.8, 1597.0], [89.9, 1601.0], [90.0, 1604.0], [90.1, 1615.0], [90.2, 1617.0], [90.3, 1626.0], [90.4, 1634.0], [90.5, 1648.0], [90.6, 1656.0], [90.7, 1667.0], [90.8, 1674.0], [90.9, 1678.0], [91.0, 1685.0], [91.1, 1693.0], [91.2, 1694.0], [91.3, 1704.0], [91.4, 1709.0], [91.5, 1715.0], [91.6, 1726.0], [91.7, 1736.0], [91.8, 1741.0], [91.9, 1745.0], [92.0, 1761.0], [92.1, 1768.0], [92.2, 1773.0], [92.3, 1778.0], [92.4, 1787.0], [92.5, 1793.0], [92.6, 1802.0], [92.7, 1805.0], [92.8, 1817.0], [92.9, 1824.0], [93.0, 1830.0], [93.1, 1837.0], [93.2, 1846.0], [93.3, 1861.0], [93.4, 1873.0], [93.5, 1885.0], [93.6, 1891.0], [93.7, 1907.0], [93.8, 1916.0], [93.9, 1927.0], [94.0, 1942.0], [94.1, 1949.0], [94.2, 1962.0], [94.3, 1974.0], [94.4, 1987.0], [94.5, 1995.0], [94.6, 2008.0], [94.7, 2018.0], [94.8, 2031.0], [94.9, 2040.0], [95.0, 2043.0], [95.1, 2052.0], [95.2, 2061.0], [95.3, 2068.0], [95.4, 2080.0], [95.5, 2108.0], [95.6, 2123.0], [95.7, 2139.0], [95.8, 2171.0], [95.9, 2183.0], [96.0, 2194.0], [96.1, 2208.0], [96.2, 2230.0], [96.3, 2255.0], [96.4, 2287.0], [96.5, 2301.0], [96.6, 2311.0], [96.7, 2340.0], [96.8, 2360.0], [96.9, 2391.0], [97.0, 2431.0], [97.1, 2462.0], [97.2, 2485.0], [97.3, 2496.0], [97.4, 2530.0], [97.5, 2560.0], [97.6, 2566.0], [97.7, 2584.0], [97.8, 2601.0], [97.9, 2642.0], [98.0, 2662.0], [98.1, 2709.0], [98.2, 2736.0], [98.3, 2773.0], [98.4, 2820.0], [98.5, 2859.0], [98.6, 2941.0], [98.7, 2957.0], [98.8, 3034.0], [98.9, 3085.0], [99.0, 3183.0], [99.1, 3251.0], [99.2, 3301.0], [99.3, 3419.0], [99.4, 3479.0], [99.5, 3552.0], [99.6, 4118.0], [99.7, 4408.0], [99.8, 4534.0], [99.9, 4665.0], [100.0, 5036.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1084.0, "series": [{"data": [[0.0, 18.0], [600.0, 302.0], [700.0, 305.0], [800.0, 302.0], [900.0, 220.0], [1000.0, 184.0], [1100.0, 212.0], [1200.0, 140.0], [1300.0, 134.0], [1400.0, 135.0], [1500.0, 104.0], [1600.0, 75.0], [1700.0, 69.0], [1800.0, 56.0], [1900.0, 47.0], [2000.0, 49.0], [2100.0, 30.0], [2200.0, 23.0], [2300.0, 23.0], [2400.0, 21.0], [2500.0, 24.0], [2600.0, 17.0], [2800.0, 8.0], [2700.0, 15.0], [2900.0, 13.0], [3000.0, 7.0], [3100.0, 6.0], [3300.0, 5.0], [3200.0, 8.0], [3400.0, 7.0], [3500.0, 5.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4300.0, 3.0], [4100.0, 2.0], [4400.0, 4.0], [4500.0, 5.0], [4600.0, 2.0], [4800.0, 2.0], [4700.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [100.0, 1084.0], [200.0, 534.0], [300.0, 396.0], [400.0, 331.0], [500.0, 327.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 636.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2366.0, "series": [{"data": [[0.0, 2366.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2260.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 636.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.744186046511627, "minX": 1.6042347E12, "maxY": 12.0, "series": [{"data": [[1.60423482E12, 12.0], [1.6042347E12, 11.881410256410254], [1.604235E12, 12.0], [1.60423506E12, 11.744186046511627], [1.60423488E12, 12.0], [1.60423494E12, 12.0], [1.60423476E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 758.1392332633966, "minX": 1.0, "maxY": 4665.0, "series": [{"data": [[4.0, 2390.0], [8.0, 2521.0], [2.0, 4464.0], [1.0, 4581.0], [9.0, 2386.0], [5.0, 2325.5], [10.0, 2644.5], [11.0, 2527.5], [6.0, 1654.0], [12.0, 758.1392332633966], [3.0, 4665.0], [7.0, 4598.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980425693652572, 765.4471683770436]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2347.0666666666666, "minX": 1.6042347E12, "maxY": 987588.3833333333, "series": [{"data": [[1.60423482E12, 696280.0166666667], [1.6042347E12, 124593.95], [1.604235E12, 987588.3833333333], [1.60423506E12, 100051.7], [1.60423488E12, 739866.55], [1.60423494E12, 664774.0333333333], [1.60423476E12, 937899.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60423482E12, 6645.716666666666], [1.6042347E12, 2805.45], [1.604235E12, 7140.15], [1.60423506E12, 2347.0666666666666], [1.60423488E12, 10676.166666666666], [1.60423494E12, 9476.35], [1.60423476E12, 6400.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 568.3975251353443, "minX": 1.6042347E12, "maxY": 956.0677290836657, "series": [{"data": [[1.60423482E12, 937.7453580901853], [1.6042347E12, 685.9583333333327], [1.604235E12, 889.5411042944785], [1.60423506E12, 846.6124031007754], [1.60423488E12, 568.3975251353443], [1.60423494E12, 657.794800371402], [1.60423476E12, 956.0677290836657]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 568.1036349574629, "minX": 1.6042347E12, "maxY": 955.4316069057107, "series": [{"data": [[1.60423482E12, 937.2745358090183], [1.6042347E12, 685.6570512820513], [1.604235E12, 888.9766871165633], [1.60423506E12, 846.4147286821706], [1.60423488E12, 568.1036349574629], [1.60423494E12, 657.5032497678745], [1.60423476E12, 955.4316069057107]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6042347E12, "maxY": 0.3814102564102569, "series": [{"data": [[1.60423482E12, 0.019893899204244055], [1.6042347E12, 0.3814102564102569], [1.604235E12, 0.015950920245398778], [1.60423506E12, 0.0], [1.60423488E12, 0.010054137664346496], [1.60423494E12, 0.013927576601671305], [1.60423476E12, 0.01859229747675964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 45.0, "minX": 1.6042347E12, "maxY": 5036.0, "series": [{"data": [[1.60423482E12, 4414.0], [1.6042347E12, 2560.0], [1.604235E12, 3552.0], [1.60423506E12, 5036.0], [1.60423488E12, 3449.0], [1.60423494E12, 2760.0], [1.60423476E12, 3773.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60423482E12, 129.76999891996383], [1.6042347E12, 132.45099977612495], [1.604235E12, 133.0], [1.60423506E12, 144.3309999382496], [1.60423488E12, 109.93799907445907], [1.60423494E12, 121.0], [1.60423476E12, 90.71599892139434]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60423482E12, 131.4745000720024], [1.6042347E12, 133.39480011940003], [1.604235E12, 133.23520023345947], [1.60423506E12, 144.56410002470017], [1.60423488E12, 127.21200246810915], [1.60423494E12, 123.01660030841828], [1.60423476E12, 105.47340208530427]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60423482E12, 131.172499909997], [1.6042347E12, 132.92049988806247], [1.604235E12, 133.0], [1.60423506E12, 144.46049996912478], [1.60423488E12, 116.85999691486357], [1.60423494E12, 121.72299961447715], [1.60423476E12, 96.72699739336966]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60423482E12, 108.0], [1.6042347E12, 92.0], [1.604235E12, 123.0], [1.60423506E12, 140.0], [1.60423488E12, 45.0], [1.60423494E12, 101.0], [1.60423476E12, 74.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60423482E12, 783.0], [1.6042347E12, 626.5], [1.604235E12, 765.0], [1.60423506E12, 337.0], [1.60423488E12, 324.0], [1.60423494E12, 525.0], [1.60423476E12, 849.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 158.0, "minX": 1.0, "maxY": 4464.0, "series": [{"data": [[32.0, 208.5], [2.0, 3632.0], [33.0, 158.0], [34.0, 346.5], [35.0, 382.0], [37.0, 196.0], [36.0, 259.0], [38.0, 207.0], [39.0, 284.0], [40.0, 296.0], [41.0, 269.0], [42.0, 288.0], [45.0, 244.5], [44.0, 240.0], [48.0, 251.5], [3.0, 3120.0], [52.0, 233.5], [61.0, 159.0], [4.0, 2041.0], [66.0, 178.0], [5.0, 2142.0], [6.0, 1526.5], [7.0, 1409.0], [8.0, 1390.0], [9.0, 1274.0], [10.0, 1084.0], [11.0, 1086.0], [12.0, 903.5], [13.0, 935.0], [14.0, 895.0], [15.0, 753.0], [16.0, 653.5], [1.0, 4464.0], [17.0, 696.0], [18.0, 683.0], [19.0, 597.0], [20.0, 594.5], [21.0, 516.0], [22.0, 594.0], [23.0, 471.0], [24.0, 486.5], [25.0, 391.0], [26.0, 305.5], [27.0, 437.0], [28.0, 256.0], [29.0, 192.0], [30.0, 392.5], [31.0, 367.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 158.0, "minX": 1.0, "maxY": 4463.0, "series": [{"data": [[32.0, 208.0], [2.0, 3630.5], [33.0, 158.0], [34.0, 346.5], [35.0, 382.0], [37.0, 196.0], [36.0, 259.0], [38.0, 207.0], [39.0, 284.0], [40.0, 295.0], [41.0, 269.0], [42.0, 288.0], [45.0, 244.5], [44.0, 240.0], [48.0, 251.5], [3.0, 3118.5], [52.0, 233.0], [61.0, 159.0], [4.0, 2040.5], [66.0, 178.0], [5.0, 2141.5], [6.0, 1524.5], [7.0, 1408.0], [8.0, 1389.0], [9.0, 1273.0], [10.0, 1083.5], [11.0, 1086.0], [12.0, 903.0], [13.0, 934.0], [14.0, 895.0], [15.0, 752.0], [16.0, 653.5], [1.0, 4463.0], [17.0, 695.0], [18.0, 683.0], [19.0, 597.0], [20.0, 594.5], [21.0, 516.0], [22.0, 594.0], [23.0, 470.5], [24.0, 486.5], [25.0, 391.0], [26.0, 305.0], [27.0, 437.0], [28.0, 256.0], [29.0, 192.0], [30.0, 392.5], [31.0, 367.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.1, "minX": 1.6042347E12, "maxY": 21.55, "series": [{"data": [[1.60423482E12, 12.566666666666666], [1.6042347E12, 5.4], [1.604235E12, 13.583333333333334], [1.60423506E12, 4.1], [1.60423488E12, 21.55], [1.60423494E12, 17.95], [1.60423476E12, 12.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.6042347E12, "maxY": 21.55, "series": [{"data": [[1.60423482E12, 12.566666666666666], [1.6042347E12, 5.2], [1.604235E12, 13.583333333333334], [1.60423506E12, 4.3], [1.60423488E12, 21.55], [1.60423494E12, 17.95], [1.60423476E12, 12.55]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60423506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.6042347E12, "maxY": 21.55, "series": [{"data": [[1.60423482E12, 12.566666666666666], [1.6042347E12, 5.2], [1.604235E12, 13.583333333333334], [1.60423506E12, 4.3], [1.60423488E12, 21.55], [1.60423494E12, 17.95], [1.60423476E12, 12.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.3, "minX": 1.6042347E12, "maxY": 21.55, "series": [{"data": [[1.60423482E12, 12.566666666666666], [1.6042347E12, 5.2], [1.604235E12, 13.583333333333334], [1.60423506E12, 4.3], [1.60423488E12, 21.55], [1.60423494E12, 17.95], [1.60423476E12, 12.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60423506E12, "title": "Total Transactions Per Second"}},
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

