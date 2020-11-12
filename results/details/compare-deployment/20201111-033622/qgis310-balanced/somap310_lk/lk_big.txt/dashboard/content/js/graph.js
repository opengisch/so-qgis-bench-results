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
        data: {"result": {"minY": 50.0, "minX": 0.0, "maxY": 5028.0, "series": [{"data": [[0.0, 50.0], [0.1, 97.0], [0.2, 115.0], [0.3, 118.0], [0.4, 119.0], [0.5, 122.0], [0.6, 125.0], [0.7, 127.0], [0.8, 131.0], [0.9, 133.0], [1.0, 136.0], [1.1, 141.0], [1.2, 142.0], [1.3, 143.0], [1.4, 143.0], [1.5, 143.0], [1.6, 144.0], [1.7, 144.0], [1.8, 144.0], [1.9, 145.0], [2.0, 145.0], [2.1, 146.0], [2.2, 146.0], [2.3, 147.0], [2.4, 147.0], [2.5, 147.0], [2.6, 148.0], [2.7, 148.0], [2.8, 148.0], [2.9, 149.0], [3.0, 149.0], [3.1, 149.0], [3.2, 150.0], [3.3, 150.0], [3.4, 150.0], [3.5, 151.0], [3.6, 151.0], [3.7, 152.0], [3.8, 152.0], [3.9, 152.0], [4.0, 153.0], [4.1, 153.0], [4.2, 154.0], [4.3, 154.0], [4.4, 154.0], [4.5, 155.0], [4.6, 155.0], [4.7, 155.0], [4.8, 155.0], [4.9, 156.0], [5.0, 156.0], [5.1, 156.0], [5.2, 157.0], [5.3, 157.0], [5.4, 157.0], [5.5, 157.0], [5.6, 158.0], [5.7, 158.0], [5.8, 158.0], [5.9, 158.0], [6.0, 159.0], [6.1, 159.0], [6.2, 159.0], [6.3, 159.0], [6.4, 159.0], [6.5, 160.0], [6.6, 160.0], [6.7, 160.0], [6.8, 161.0], [6.9, 161.0], [7.0, 161.0], [7.1, 161.0], [7.2, 161.0], [7.3, 162.0], [7.4, 162.0], [7.5, 162.0], [7.6, 162.0], [7.7, 163.0], [7.8, 163.0], [7.9, 163.0], [8.0, 164.0], [8.1, 164.0], [8.2, 164.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 165.0], [8.7, 165.0], [8.8, 165.0], [8.9, 165.0], [9.0, 165.0], [9.1, 165.0], [9.2, 166.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 167.0], [9.9, 167.0], [10.0, 167.0], [10.1, 167.0], [10.2, 168.0], [10.3, 168.0], [10.4, 168.0], [10.5, 168.0], [10.6, 168.0], [10.7, 169.0], [10.8, 169.0], [10.9, 169.0], [11.0, 169.0], [11.1, 169.0], [11.2, 169.0], [11.3, 170.0], [11.4, 170.0], [11.5, 170.0], [11.6, 170.0], [11.7, 170.0], [11.8, 170.0], [11.9, 171.0], [12.0, 171.0], [12.1, 171.0], [12.2, 171.0], [12.3, 171.0], [12.4, 172.0], [12.5, 172.0], [12.6, 172.0], [12.7, 172.0], [12.8, 172.0], [12.9, 172.0], [13.0, 172.0], [13.1, 173.0], [13.2, 173.0], [13.3, 173.0], [13.4, 173.0], [13.5, 173.0], [13.6, 173.0], [13.7, 174.0], [13.8, 174.0], [13.9, 174.0], [14.0, 174.0], [14.1, 174.0], [14.2, 174.0], [14.3, 175.0], [14.4, 175.0], [14.5, 175.0], [14.6, 175.0], [14.7, 176.0], [14.8, 176.0], [14.9, 176.0], [15.0, 176.0], [15.1, 176.0], [15.2, 177.0], [15.3, 177.0], [15.4, 177.0], [15.5, 177.0], [15.6, 177.0], [15.7, 178.0], [15.8, 178.0], [15.9, 178.0], [16.0, 179.0], [16.1, 179.0], [16.2, 179.0], [16.3, 179.0], [16.4, 179.0], [16.5, 180.0], [16.6, 180.0], [16.7, 180.0], [16.8, 181.0], [16.9, 181.0], [17.0, 181.0], [17.1, 181.0], [17.2, 182.0], [17.3, 182.0], [17.4, 182.0], [17.5, 182.0], [17.6, 183.0], [17.7, 183.0], [17.8, 184.0], [17.9, 184.0], [18.0, 184.0], [18.1, 185.0], [18.2, 185.0], [18.3, 185.0], [18.4, 186.0], [18.5, 186.0], [18.6, 186.0], [18.7, 186.0], [18.8, 187.0], [18.9, 187.0], [19.0, 187.0], [19.1, 188.0], [19.2, 189.0], [19.3, 189.0], [19.4, 189.0], [19.5, 190.0], [19.6, 190.0], [19.7, 191.0], [19.8, 191.0], [19.9, 192.0], [20.0, 192.0], [20.1, 192.0], [20.2, 193.0], [20.3, 193.0], [20.4, 193.0], [20.5, 194.0], [20.6, 195.0], [20.7, 195.0], [20.8, 197.0], [20.9, 197.0], [21.0, 198.0], [21.1, 199.0], [21.2, 200.0], [21.3, 201.0], [21.4, 203.0], [21.5, 204.0], [21.6, 204.0], [21.7, 207.0], [21.8, 208.0], [21.9, 208.0], [22.0, 209.0], [22.1, 213.0], [22.2, 215.0], [22.3, 216.0], [22.4, 218.0], [22.5, 219.0], [22.6, 221.0], [22.7, 222.0], [22.8, 225.0], [22.9, 226.0], [23.0, 228.0], [23.1, 231.0], [23.2, 233.0], [23.3, 234.0], [23.4, 236.0], [23.5, 238.0], [23.6, 239.0], [23.7, 241.0], [23.8, 241.0], [23.9, 242.0], [24.0, 244.0], [24.1, 245.0], [24.2, 247.0], [24.3, 247.0], [24.4, 248.0], [24.5, 249.0], [24.6, 250.0], [24.7, 250.0], [24.8, 251.0], [24.9, 252.0], [25.0, 253.0], [25.1, 254.0], [25.2, 255.0], [25.3, 255.0], [25.4, 256.0], [25.5, 256.0], [25.6, 257.0], [25.7, 258.0], [25.8, 258.0], [25.9, 258.0], [26.0, 259.0], [26.1, 259.0], [26.2, 261.0], [26.3, 261.0], [26.4, 262.0], [26.5, 262.0], [26.6, 263.0], [26.7, 264.0], [26.8, 265.0], [26.9, 265.0], [27.0, 266.0], [27.1, 267.0], [27.2, 267.0], [27.3, 268.0], [27.4, 268.0], [27.5, 270.0], [27.6, 271.0], [27.7, 272.0], [27.8, 272.0], [27.9, 273.0], [28.0, 273.0], [28.1, 275.0], [28.2, 275.0], [28.3, 276.0], [28.4, 276.0], [28.5, 277.0], [28.6, 277.0], [28.7, 278.0], [28.8, 278.0], [28.9, 278.0], [29.0, 279.0], [29.1, 280.0], [29.2, 280.0], [29.3, 280.0], [29.4, 281.0], [29.5, 282.0], [29.6, 282.0], [29.7, 283.0], [29.8, 283.0], [29.9, 284.0], [30.0, 285.0], [30.1, 286.0], [30.2, 287.0], [30.3, 288.0], [30.4, 288.0], [30.5, 289.0], [30.6, 290.0], [30.7, 291.0], [30.8, 292.0], [30.9, 293.0], [31.0, 294.0], [31.1, 295.0], [31.2, 295.0], [31.3, 297.0], [31.4, 298.0], [31.5, 300.0], [31.6, 301.0], [31.7, 301.0], [31.8, 303.0], [31.9, 304.0], [32.0, 304.0], [32.1, 305.0], [32.2, 306.0], [32.3, 306.0], [32.4, 308.0], [32.5, 309.0], [32.6, 309.0], [32.7, 310.0], [32.8, 310.0], [32.9, 311.0], [33.0, 312.0], [33.1, 312.0], [33.2, 314.0], [33.3, 315.0], [33.4, 316.0], [33.5, 318.0], [33.6, 319.0], [33.7, 319.0], [33.8, 320.0], [33.9, 321.0], [34.0, 322.0], [34.1, 325.0], [34.2, 326.0], [34.3, 327.0], [34.4, 328.0], [34.5, 332.0], [34.6, 333.0], [34.7, 334.0], [34.8, 336.0], [34.9, 337.0], [35.0, 339.0], [35.1, 340.0], [35.2, 342.0], [35.3, 343.0], [35.4, 344.0], [35.5, 345.0], [35.6, 346.0], [35.7, 348.0], [35.8, 349.0], [35.9, 352.0], [36.0, 353.0], [36.1, 354.0], [36.2, 356.0], [36.3, 357.0], [36.4, 358.0], [36.5, 360.0], [36.6, 362.0], [36.7, 364.0], [36.8, 364.0], [36.9, 365.0], [37.0, 367.0], [37.1, 369.0], [37.2, 369.0], [37.3, 370.0], [37.4, 371.0], [37.5, 372.0], [37.6, 374.0], [37.7, 375.0], [37.8, 378.0], [37.9, 380.0], [38.0, 382.0], [38.1, 383.0], [38.2, 385.0], [38.3, 385.0], [38.4, 387.0], [38.5, 389.0], [38.6, 391.0], [38.7, 395.0], [38.8, 397.0], [38.9, 398.0], [39.0, 401.0], [39.1, 402.0], [39.2, 404.0], [39.3, 405.0], [39.4, 409.0], [39.5, 411.0], [39.6, 414.0], [39.7, 415.0], [39.8, 417.0], [39.9, 419.0], [40.0, 421.0], [40.1, 422.0], [40.2, 423.0], [40.3, 424.0], [40.4, 425.0], [40.5, 426.0], [40.6, 427.0], [40.7, 428.0], [40.8, 430.0], [40.9, 431.0], [41.0, 432.0], [41.1, 434.0], [41.2, 437.0], [41.3, 440.0], [41.4, 440.0], [41.5, 442.0], [41.6, 443.0], [41.7, 444.0], [41.8, 444.0], [41.9, 446.0], [42.0, 448.0], [42.1, 449.0], [42.2, 451.0], [42.3, 452.0], [42.4, 453.0], [42.5, 454.0], [42.6, 455.0], [42.7, 456.0], [42.8, 458.0], [42.9, 459.0], [43.0, 460.0], [43.1, 461.0], [43.2, 464.0], [43.3, 465.0], [43.4, 467.0], [43.5, 468.0], [43.6, 470.0], [43.7, 470.0], [43.8, 471.0], [43.9, 473.0], [44.0, 475.0], [44.1, 477.0], [44.2, 478.0], [44.3, 480.0], [44.4, 482.0], [44.5, 483.0], [44.6, 484.0], [44.7, 485.0], [44.8, 487.0], [44.9, 488.0], [45.0, 490.0], [45.1, 491.0], [45.2, 492.0], [45.3, 493.0], [45.4, 496.0], [45.5, 498.0], [45.6, 500.0], [45.7, 502.0], [45.8, 503.0], [45.9, 504.0], [46.0, 505.0], [46.1, 509.0], [46.2, 511.0], [46.3, 514.0], [46.4, 515.0], [46.5, 517.0], [46.6, 519.0], [46.7, 520.0], [46.8, 522.0], [46.9, 523.0], [47.0, 524.0], [47.1, 525.0], [47.2, 529.0], [47.3, 530.0], [47.4, 531.0], [47.5, 533.0], [47.6, 535.0], [47.7, 536.0], [47.8, 539.0], [47.9, 541.0], [48.0, 543.0], [48.1, 544.0], [48.2, 545.0], [48.3, 545.0], [48.4, 547.0], [48.5, 549.0], [48.6, 550.0], [48.7, 552.0], [48.8, 553.0], [48.9, 555.0], [49.0, 556.0], [49.1, 556.0], [49.2, 558.0], [49.3, 560.0], [49.4, 561.0], [49.5, 563.0], [49.6, 564.0], [49.7, 567.0], [49.8, 569.0], [49.9, 572.0], [50.0, 576.0], [50.1, 578.0], [50.2, 579.0], [50.3, 581.0], [50.4, 584.0], [50.5, 586.0], [50.6, 587.0], [50.7, 589.0], [50.8, 590.0], [50.9, 591.0], [51.0, 592.0], [51.1, 593.0], [51.2, 594.0], [51.3, 595.0], [51.4, 596.0], [51.5, 598.0], [51.6, 600.0], [51.7, 601.0], [51.8, 602.0], [51.9, 603.0], [52.0, 605.0], [52.1, 606.0], [52.2, 608.0], [52.3, 611.0], [52.4, 613.0], [52.5, 614.0], [52.6, 616.0], [52.7, 618.0], [52.8, 619.0], [52.9, 621.0], [53.0, 622.0], [53.1, 623.0], [53.2, 624.0], [53.3, 624.0], [53.4, 626.0], [53.5, 627.0], [53.6, 628.0], [53.7, 629.0], [53.8, 630.0], [53.9, 631.0], [54.0, 633.0], [54.1, 634.0], [54.2, 635.0], [54.3, 635.0], [54.4, 636.0], [54.5, 639.0], [54.6, 640.0], [54.7, 641.0], [54.8, 641.0], [54.9, 643.0], [55.0, 645.0], [55.1, 646.0], [55.2, 648.0], [55.3, 650.0], [55.4, 652.0], [55.5, 654.0], [55.6, 655.0], [55.7, 657.0], [55.8, 662.0], [55.9, 663.0], [56.0, 665.0], [56.1, 667.0], [56.2, 669.0], [56.3, 671.0], [56.4, 674.0], [56.5, 675.0], [56.6, 677.0], [56.7, 680.0], [56.8, 681.0], [56.9, 683.0], [57.0, 684.0], [57.1, 686.0], [57.2, 688.0], [57.3, 690.0], [57.4, 693.0], [57.5, 695.0], [57.6, 696.0], [57.7, 698.0], [57.8, 699.0], [57.9, 700.0], [58.0, 701.0], [58.1, 703.0], [58.2, 704.0], [58.3, 705.0], [58.4, 708.0], [58.5, 710.0], [58.6, 712.0], [58.7, 714.0], [58.8, 715.0], [58.9, 718.0], [59.0, 721.0], [59.1, 722.0], [59.2, 724.0], [59.3, 724.0], [59.4, 729.0], [59.5, 731.0], [59.6, 733.0], [59.7, 734.0], [59.8, 736.0], [59.9, 738.0], [60.0, 742.0], [60.1, 744.0], [60.2, 746.0], [60.3, 747.0], [60.4, 749.0], [60.5, 750.0], [60.6, 751.0], [60.7, 754.0], [60.8, 756.0], [60.9, 758.0], [61.0, 760.0], [61.1, 762.0], [61.2, 764.0], [61.3, 765.0], [61.4, 766.0], [61.5, 768.0], [61.6, 770.0], [61.7, 771.0], [61.8, 772.0], [61.9, 774.0], [62.0, 777.0], [62.1, 778.0], [62.2, 780.0], [62.3, 782.0], [62.4, 783.0], [62.5, 784.0], [62.6, 785.0], [62.7, 786.0], [62.8, 788.0], [62.9, 790.0], [63.0, 791.0], [63.1, 794.0], [63.2, 796.0], [63.3, 797.0], [63.4, 799.0], [63.5, 800.0], [63.6, 803.0], [63.7, 803.0], [63.8, 805.0], [63.9, 806.0], [64.0, 807.0], [64.1, 808.0], [64.2, 809.0], [64.3, 810.0], [64.4, 811.0], [64.5, 812.0], [64.6, 814.0], [64.7, 816.0], [64.8, 817.0], [64.9, 819.0], [65.0, 821.0], [65.1, 823.0], [65.2, 826.0], [65.3, 826.0], [65.4, 827.0], [65.5, 828.0], [65.6, 829.0], [65.7, 832.0], [65.8, 834.0], [65.9, 835.0], [66.0, 835.0], [66.1, 838.0], [66.2, 839.0], [66.3, 840.0], [66.4, 842.0], [66.5, 844.0], [66.6, 846.0], [66.7, 849.0], [66.8, 854.0], [66.9, 855.0], [67.0, 857.0], [67.1, 858.0], [67.2, 861.0], [67.3, 863.0], [67.4, 865.0], [67.5, 866.0], [67.6, 867.0], [67.7, 869.0], [67.8, 870.0], [67.9, 872.0], [68.0, 874.0], [68.1, 876.0], [68.2, 879.0], [68.3, 881.0], [68.4, 883.0], [68.5, 885.0], [68.6, 887.0], [68.7, 890.0], [68.8, 891.0], [68.9, 891.0], [69.0, 894.0], [69.1, 896.0], [69.2, 899.0], [69.3, 900.0], [69.4, 902.0], [69.5, 904.0], [69.6, 906.0], [69.7, 908.0], [69.8, 910.0], [69.9, 913.0], [70.0, 915.0], [70.1, 917.0], [70.2, 920.0], [70.3, 926.0], [70.4, 927.0], [70.5, 930.0], [70.6, 931.0], [70.7, 933.0], [70.8, 934.0], [70.9, 936.0], [71.0, 937.0], [71.1, 942.0], [71.2, 945.0], [71.3, 948.0], [71.4, 952.0], [71.5, 956.0], [71.6, 959.0], [71.7, 963.0], [71.8, 966.0], [71.9, 968.0], [72.0, 971.0], [72.1, 976.0], [72.2, 980.0], [72.3, 981.0], [72.4, 983.0], [72.5, 987.0], [72.6, 990.0], [72.7, 990.0], [72.8, 993.0], [72.9, 996.0], [73.0, 999.0], [73.1, 1001.0], [73.2, 1005.0], [73.3, 1007.0], [73.4, 1009.0], [73.5, 1011.0], [73.6, 1015.0], [73.7, 1017.0], [73.8, 1023.0], [73.9, 1025.0], [74.0, 1026.0], [74.1, 1029.0], [74.2, 1030.0], [74.3, 1032.0], [74.4, 1036.0], [74.5, 1038.0], [74.6, 1040.0], [74.7, 1042.0], [74.8, 1044.0], [74.9, 1049.0], [75.0, 1054.0], [75.1, 1056.0], [75.2, 1060.0], [75.3, 1062.0], [75.4, 1063.0], [75.5, 1066.0], [75.6, 1068.0], [75.7, 1070.0], [75.8, 1071.0], [75.9, 1072.0], [76.0, 1075.0], [76.1, 1077.0], [76.2, 1078.0], [76.3, 1083.0], [76.4, 1087.0], [76.5, 1091.0], [76.6, 1094.0], [76.7, 1097.0], [76.8, 1101.0], [76.9, 1102.0], [77.0, 1103.0], [77.1, 1109.0], [77.2, 1113.0], [77.3, 1117.0], [77.4, 1122.0], [77.5, 1126.0], [77.6, 1128.0], [77.7, 1130.0], [77.8, 1133.0], [77.9, 1136.0], [78.0, 1141.0], [78.1, 1142.0], [78.2, 1146.0], [78.3, 1149.0], [78.4, 1154.0], [78.5, 1155.0], [78.6, 1157.0], [78.7, 1164.0], [78.8, 1166.0], [78.9, 1167.0], [79.0, 1169.0], [79.1, 1172.0], [79.2, 1174.0], [79.3, 1179.0], [79.4, 1186.0], [79.5, 1188.0], [79.6, 1189.0], [79.7, 1194.0], [79.8, 1198.0], [79.9, 1199.0], [80.0, 1200.0], [80.1, 1202.0], [80.2, 1203.0], [80.3, 1206.0], [80.4, 1209.0], [80.5, 1211.0], [80.6, 1213.0], [80.7, 1215.0], [80.8, 1219.0], [80.9, 1223.0], [81.0, 1229.0], [81.1, 1235.0], [81.2, 1240.0], [81.3, 1243.0], [81.4, 1249.0], [81.5, 1251.0], [81.6, 1254.0], [81.7, 1258.0], [81.8, 1262.0], [81.9, 1264.0], [82.0, 1266.0], [82.1, 1269.0], [82.2, 1272.0], [82.3, 1276.0], [82.4, 1280.0], [82.5, 1285.0], [82.6, 1287.0], [82.7, 1290.0], [82.8, 1296.0], [82.9, 1300.0], [83.0, 1303.0], [83.1, 1304.0], [83.2, 1306.0], [83.3, 1309.0], [83.4, 1312.0], [83.5, 1316.0], [83.6, 1320.0], [83.7, 1324.0], [83.8, 1326.0], [83.9, 1329.0], [84.0, 1332.0], [84.1, 1337.0], [84.2, 1340.0], [84.3, 1344.0], [84.4, 1346.0], [84.5, 1352.0], [84.6, 1358.0], [84.7, 1362.0], [84.8, 1370.0], [84.9, 1374.0], [85.0, 1377.0], [85.1, 1380.0], [85.2, 1385.0], [85.3, 1389.0], [85.4, 1393.0], [85.5, 1400.0], [85.6, 1402.0], [85.7, 1407.0], [85.8, 1408.0], [85.9, 1414.0], [86.0, 1416.0], [86.1, 1420.0], [86.2, 1422.0], [86.3, 1424.0], [86.4, 1432.0], [86.5, 1438.0], [86.6, 1444.0], [86.7, 1452.0], [86.8, 1458.0], [86.9, 1461.0], [87.0, 1463.0], [87.1, 1468.0], [87.2, 1472.0], [87.3, 1476.0], [87.4, 1481.0], [87.5, 1489.0], [87.6, 1491.0], [87.7, 1495.0], [87.8, 1497.0], [87.9, 1501.0], [88.0, 1503.0], [88.1, 1508.0], [88.2, 1512.0], [88.3, 1515.0], [88.4, 1521.0], [88.5, 1524.0], [88.6, 1534.0], [88.7, 1537.0], [88.8, 1541.0], [88.9, 1546.0], [89.0, 1551.0], [89.1, 1555.0], [89.2, 1559.0], [89.3, 1562.0], [89.4, 1571.0], [89.5, 1575.0], [89.6, 1578.0], [89.7, 1583.0], [89.8, 1587.0], [89.9, 1591.0], [90.0, 1597.0], [90.1, 1603.0], [90.2, 1607.0], [90.3, 1616.0], [90.4, 1623.0], [90.5, 1629.0], [90.6, 1635.0], [90.7, 1644.0], [90.8, 1651.0], [90.9, 1658.0], [91.0, 1661.0], [91.1, 1662.0], [91.2, 1667.0], [91.3, 1677.0], [91.4, 1687.0], [91.5, 1697.0], [91.6, 1706.0], [91.7, 1711.0], [91.8, 1715.0], [91.9, 1718.0], [92.0, 1724.0], [92.1, 1729.0], [92.2, 1733.0], [92.3, 1744.0], [92.4, 1751.0], [92.5, 1757.0], [92.6, 1760.0], [92.7, 1768.0], [92.8, 1781.0], [92.9, 1787.0], [93.0, 1790.0], [93.1, 1803.0], [93.2, 1817.0], [93.3, 1831.0], [93.4, 1838.0], [93.5, 1851.0], [93.6, 1858.0], [93.7, 1873.0], [93.8, 1887.0], [93.9, 1901.0], [94.0, 1907.0], [94.1, 1916.0], [94.2, 1934.0], [94.3, 1942.0], [94.4, 1951.0], [94.5, 1964.0], [94.6, 1975.0], [94.7, 1981.0], [94.8, 1986.0], [94.9, 1994.0], [95.0, 2007.0], [95.1, 2034.0], [95.2, 2044.0], [95.3, 2056.0], [95.4, 2074.0], [95.5, 2090.0], [95.6, 2095.0], [95.7, 2099.0], [95.8, 2107.0], [95.9, 2121.0], [96.0, 2131.0], [96.1, 2143.0], [96.2, 2181.0], [96.3, 2193.0], [96.4, 2210.0], [96.5, 2247.0], [96.6, 2258.0], [96.7, 2271.0], [96.8, 2320.0], [96.9, 2335.0], [97.0, 2363.0], [97.1, 2384.0], [97.2, 2408.0], [97.3, 2433.0], [97.4, 2449.0], [97.5, 2474.0], [97.6, 2516.0], [97.7, 2529.0], [97.8, 2567.0], [97.9, 2604.0], [98.0, 2624.0], [98.1, 2681.0], [98.2, 2700.0], [98.3, 2746.0], [98.4, 2781.0], [98.5, 2856.0], [98.6, 2917.0], [98.7, 2959.0], [98.8, 3004.0], [98.9, 3079.0], [99.0, 3099.0], [99.1, 3160.0], [99.2, 3215.0], [99.3, 3277.0], [99.4, 3356.0], [99.5, 3729.0], [99.6, 4060.0], [99.7, 4336.0], [99.8, 4470.0], [99.9, 4650.0], [100.0, 5028.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1105.0, "series": [{"data": [[0.0, 6.0], [600.0, 330.0], [700.0, 296.0], [800.0, 301.0], [900.0, 200.0], [1000.0, 197.0], [1100.0, 166.0], [1200.0, 157.0], [1300.0, 137.0], [1400.0, 123.0], [1500.0, 117.0], [1600.0, 77.0], [1700.0, 82.0], [1800.0, 40.0], [1900.0, 58.0], [2000.0, 40.0], [2100.0, 32.0], [2200.0, 24.0], [2300.0, 20.0], [2400.0, 22.0], [2500.0, 17.0], [2600.0, 16.0], [2700.0, 13.0], [2800.0, 7.0], [2900.0, 11.0], [3000.0, 12.0], [3100.0, 7.0], [3200.0, 10.0], [3300.0, 4.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3700.0, 5.0], [3800.0, 1.0], [4000.0, 1.0], [4100.0, 2.0], [4300.0, 3.0], [4200.0, 2.0], [4600.0, 3.0], [4400.0, 4.0], [4500.0, 2.0], [4700.0, 2.0], [4900.0, 2.0], [5000.0, 1.0], [100.0, 1105.0], [200.0, 546.0], [300.0, 394.0], [400.0, 348.0], [500.0, 316.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 637.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2400.0, "series": [{"data": [[0.0, 2400.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2225.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 637.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.780000000000003, "minX": 1.60507044E12, "maxY": 12.0, "series": [{"data": [[1.60507068E12, 12.0], [1.6050708E12, 11.780000000000003], [1.6050705E12, 12.0], [1.60507044E12, 11.832512315270936], [1.60507062E12, 12.0], [1.60507056E12, 12.0], [1.60507074E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050708E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 749.2427017744725, "minX": 1.0, "maxY": 4618.0, "series": [{"data": [[8.0, 2602.5], [4.0, 4605.0], [2.0, 4618.0], [1.0, 4545.0], [9.0, 1594.6666666666667], [5.0, 2568.0], [10.0, 2412.0], [11.0, 1628.0], [6.0, 1505.6666666666667], [12.0, 749.2427017744725], [3.0, 4216.0], [7.0, 4593.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980995819080208, 756.4302546560261]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1812.25, "minX": 1.60507044E12, "maxY": 966931.5333333333, "series": [{"data": [[1.60507068E12, 672956.9666666667], [1.6050708E12, 156968.75], [1.6050705E12, 920713.3833333333], [1.60507044E12, 55404.35], [1.60507062E12, 713748.85], [1.60507056E12, 764300.55], [1.60507074E12, 966931.5333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60507068E12, 10188.433333333332], [1.6050708E12, 2719.95], [1.6050705E12, 6444.25], [1.60507044E12, 1812.25], [1.60507062E12, 9842.933333333332], [1.60507056E12, 7434.65], [1.60507074E12, 7048.483333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050708E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 607.9566666666669, "minX": 1.60507044E12, "maxY": 962.173796791444, "series": [{"data": [[1.60507068E12, 621.8729472774402], [1.6050708E12, 840.7633333333331], [1.6050705E12, 962.173796791444], [1.60507044E12, 636.6403940886701], [1.60507062E12, 607.9566666666669], [1.60507056E12, 830.8470588235293], [1.60507074E12, 900.3582089552242]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050708E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 607.6658333333339, "minX": 1.60507044E12, "maxY": 961.5307486631013, "series": [{"data": [[1.60507068E12, 621.5877268798621], [1.6050708E12, 840.5033333333333], [1.6050705E12, 961.5307486631013], [1.60507044E12, 636.4137931034485], [1.60507062E12, 607.6658333333339], [1.60507056E12, 830.4399999999996], [1.60507074E12, 899.7798507462684]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050708E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60507044E12, "maxY": 0.6108374384236448, "series": [{"data": [[1.60507068E12, 0.01123595505617979], [1.6050708E12, 0.0], [1.6050705E12, 0.022727272727272717], [1.60507044E12, 0.6108374384236448], [1.60507062E12, 0.011666666666666657], [1.60507056E12, 0.017647058823529425], [1.60507074E12, 0.016169154228855728]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050708E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.60507044E12, "maxY": 5028.0, "series": [{"data": [[1.60507068E12, 2745.0], [1.6050708E12, 5028.0], [1.6050705E12, 3549.0], [1.60507044E12, 2498.0], [1.60507062E12, 4361.0], [1.60507056E12, 3636.0], [1.60507074E12, 3773.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60507068E12, 129.0], [1.6050708E12, 143.708999928236], [1.6050705E12, 118.0], [1.60507044E12, 51.67199990272522], [1.60507062E12, 141.0], [1.60507056E12, 142.0], [1.60507074E12, 125.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60507068E12, 130.39260033130645], [1.6050708E12, 143.9799000287056], [1.6050705E12, 118.4151000714302], [1.60507044E12, 53.35240134239196], [1.60507062E12, 143.66970034360887], [1.60507056E12, 142.4249000811577], [1.60507074E12, 125.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60507068E12, 129.00299958586692], [1.6050708E12, 143.85949996411802], [1.6050705E12, 118.11549991071224], [1.60507044E12, 51.87599995136261], [1.60507062E12, 142.22849957048894], [1.60507056E12, 142.0844998985529], [1.60507074E12, 125.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60507068E12, 119.0], [1.6050708E12, 142.0], [1.6050705E12, 97.0], [1.60507044E12, 50.0], [1.60507062E12, 84.0], [1.60507056E12, 115.0], [1.60507074E12, 112.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60507068E12, 470.0], [1.6050708E12, 474.5], [1.6050705E12, 865.0], [1.60507044E12, 578.0], [1.60507062E12, 339.5], [1.60507056E12, 714.0], [1.60507074E12, 781.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 169.0, "minX": 1.0, "maxY": 4581.5, "series": [{"data": [[33.0, 274.0], [2.0, 3934.0], [32.0, 250.5], [35.0, 272.5], [34.0, 246.0], [37.0, 249.0], [36.0, 342.0], [39.0, 192.0], [38.0, 301.0], [40.0, 185.5], [41.0, 273.0], [42.0, 262.5], [45.0, 267.0], [44.0, 279.5], [47.0, 189.0], [46.0, 180.5], [3.0, 3117.0], [53.0, 169.0], [4.0, 2572.0], [67.0, 179.0], [5.0, 2020.0], [6.0, 1669.0], [7.0, 1433.0], [8.0, 1362.0], [9.0, 1262.0], [10.0, 1143.0], [11.0, 1093.0], [12.0, 921.5], [13.0, 828.0], [14.0, 823.5], [15.0, 776.0], [16.0, 824.0], [1.0, 4581.5], [17.0, 642.0], [18.0, 669.5], [19.0, 600.0], [20.0, 626.0], [21.0, 540.0], [22.0, 455.0], [23.0, 436.0], [24.0, 384.5], [25.0, 452.5], [26.0, 498.5], [27.0, 295.0], [28.0, 277.0], [29.0, 366.5], [30.0, 448.5], [31.0, 310.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 169.0, "minX": 1.0, "maxY": 4581.0, "series": [{"data": [[33.0, 273.5], [2.0, 3934.0], [32.0, 250.5], [35.0, 272.5], [34.0, 246.0], [37.0, 249.0], [36.0, 342.0], [39.0, 192.0], [38.0, 301.0], [40.0, 185.5], [41.0, 273.0], [42.0, 262.5], [45.0, 267.0], [44.0, 279.0], [47.0, 189.0], [46.0, 180.5], [3.0, 3117.0], [53.0, 169.0], [4.0, 2571.5], [67.0, 179.0], [5.0, 2017.0], [6.0, 1666.5], [7.0, 1433.0], [8.0, 1362.0], [9.0, 1258.0], [10.0, 1142.5], [11.0, 1093.0], [12.0, 920.5], [13.0, 828.0], [14.0, 823.5], [15.0, 776.0], [16.0, 823.5], [1.0, 4581.0], [17.0, 642.0], [18.0, 668.5], [19.0, 600.0], [20.0, 626.0], [21.0, 540.0], [22.0, 455.0], [23.0, 436.0], [24.0, 384.5], [25.0, 452.0], [26.0, 498.5], [27.0, 295.0], [28.0, 277.0], [29.0, 366.5], [30.0, 446.0], [31.0, 310.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.5833333333333335, "minX": 1.60507044E12, "maxY": 20.0, "series": [{"data": [[1.60507068E12, 19.283333333333335], [1.6050708E12, 4.8], [1.6050705E12, 12.466666666666667], [1.60507044E12, 3.5833333333333335], [1.60507062E12, 20.0], [1.60507056E12, 14.166666666666666], [1.60507074E12, 13.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050708E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.60507044E12, "maxY": 20.0, "series": [{"data": [[1.60507068E12, 19.283333333333335], [1.6050708E12, 5.0], [1.6050705E12, 12.466666666666667], [1.60507044E12, 3.3833333333333333], [1.60507062E12, 20.0], [1.60507056E12, 14.166666666666666], [1.60507074E12, 13.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6050708E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.60507044E12, "maxY": 20.0, "series": [{"data": [[1.60507068E12, 19.283333333333335], [1.6050708E12, 5.0], [1.6050705E12, 12.466666666666667], [1.60507044E12, 3.3833333333333333], [1.60507062E12, 20.0], [1.60507056E12, 14.166666666666666], [1.60507074E12, 13.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050708E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.60507044E12, "maxY": 20.0, "series": [{"data": [[1.60507068E12, 19.283333333333335], [1.6050708E12, 5.0], [1.6050705E12, 12.466666666666667], [1.60507044E12, 3.3833333333333333], [1.60507062E12, 20.0], [1.60507056E12, 14.166666666666666], [1.60507074E12, 13.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6050708E12, "title": "Total Transactions Per Second"}},
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

