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
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 5312.0, "series": [{"data": [[0.0, 61.0], [0.1, 78.0], [0.2, 84.0], [0.3, 104.0], [0.4, 121.0], [0.5, 126.0], [0.6, 130.0], [0.7, 131.0], [0.8, 135.0], [0.9, 139.0], [1.0, 140.0], [1.1, 142.0], [1.2, 144.0], [1.3, 145.0], [1.4, 146.0], [1.5, 147.0], [1.6, 148.0], [1.7, 148.0], [1.8, 150.0], [1.9, 151.0], [2.0, 152.0], [2.1, 153.0], [2.2, 153.0], [2.3, 154.0], [2.4, 155.0], [2.5, 156.0], [2.6, 156.0], [2.7, 156.0], [2.8, 156.0], [2.9, 157.0], [3.0, 158.0], [3.1, 158.0], [3.2, 158.0], [3.3, 159.0], [3.4, 159.0], [3.5, 160.0], [3.6, 160.0], [3.7, 160.0], [3.8, 160.0], [3.9, 161.0], [4.0, 161.0], [4.1, 162.0], [4.2, 162.0], [4.3, 163.0], [4.4, 164.0], [4.5, 164.0], [4.6, 164.0], [4.7, 164.0], [4.8, 165.0], [4.9, 165.0], [5.0, 166.0], [5.1, 166.0], [5.2, 166.0], [5.3, 166.0], [5.4, 167.0], [5.5, 167.0], [5.6, 167.0], [5.7, 168.0], [5.8, 168.0], [5.9, 168.0], [6.0, 169.0], [6.1, 169.0], [6.2, 169.0], [6.3, 169.0], [6.4, 170.0], [6.5, 170.0], [6.6, 170.0], [6.7, 170.0], [6.8, 171.0], [6.9, 171.0], [7.0, 171.0], [7.1, 172.0], [7.2, 172.0], [7.3, 172.0], [7.4, 172.0], [7.5, 173.0], [7.6, 173.0], [7.7, 173.0], [7.8, 173.0], [7.9, 174.0], [8.0, 174.0], [8.1, 174.0], [8.2, 174.0], [8.3, 174.0], [8.4, 175.0], [8.5, 175.0], [8.6, 175.0], [8.7, 175.0], [8.8, 175.0], [8.9, 176.0], [9.0, 176.0], [9.1, 176.0], [9.2, 177.0], [9.3, 177.0], [9.4, 177.0], [9.5, 177.0], [9.6, 177.0], [9.7, 177.0], [9.8, 178.0], [9.9, 178.0], [10.0, 178.0], [10.1, 178.0], [10.2, 178.0], [10.3, 178.0], [10.4, 179.0], [10.5, 179.0], [10.6, 179.0], [10.7, 179.0], [10.8, 179.0], [10.9, 180.0], [11.0, 180.0], [11.1, 180.0], [11.2, 181.0], [11.3, 181.0], [11.4, 181.0], [11.5, 181.0], [11.6, 181.0], [11.7, 181.0], [11.8, 181.0], [11.9, 182.0], [12.0, 182.0], [12.1, 182.0], [12.2, 182.0], [12.3, 183.0], [12.4, 183.0], [12.5, 183.0], [12.6, 183.0], [12.7, 183.0], [12.8, 183.0], [12.9, 183.0], [13.0, 184.0], [13.1, 184.0], [13.2, 184.0], [13.3, 184.0], [13.4, 184.0], [13.5, 185.0], [13.6, 185.0], [13.7, 185.0], [13.8, 186.0], [13.9, 186.0], [14.0, 186.0], [14.1, 186.0], [14.2, 187.0], [14.3, 187.0], [14.4, 187.0], [14.5, 187.0], [14.6, 187.0], [14.7, 188.0], [14.8, 188.0], [14.9, 188.0], [15.0, 188.0], [15.1, 189.0], [15.2, 189.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 189.0], [15.7, 190.0], [15.8, 190.0], [15.9, 190.0], [16.0, 190.0], [16.1, 191.0], [16.2, 191.0], [16.3, 192.0], [16.4, 192.0], [16.5, 192.0], [16.6, 193.0], [16.7, 193.0], [16.8, 193.0], [16.9, 194.0], [17.0, 194.0], [17.1, 194.0], [17.2, 195.0], [17.3, 195.0], [17.4, 196.0], [17.5, 196.0], [17.6, 197.0], [17.7, 197.0], [17.8, 197.0], [17.9, 198.0], [18.0, 198.0], [18.1, 198.0], [18.2, 198.0], [18.3, 199.0], [18.4, 199.0], [18.5, 200.0], [18.6, 200.0], [18.7, 201.0], [18.8, 201.0], [18.9, 202.0], [19.0, 202.0], [19.1, 202.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 204.0], [19.6, 205.0], [19.7, 205.0], [19.8, 205.0], [19.9, 206.0], [20.0, 207.0], [20.1, 207.0], [20.2, 209.0], [20.3, 209.0], [20.4, 209.0], [20.5, 210.0], [20.6, 211.0], [20.7, 212.0], [20.8, 213.0], [20.9, 214.0], [21.0, 214.0], [21.1, 215.0], [21.2, 216.0], [21.3, 217.0], [21.4, 218.0], [21.5, 219.0], [21.6, 221.0], [21.7, 223.0], [21.8, 224.0], [21.9, 226.0], [22.0, 227.0], [22.1, 228.0], [22.2, 229.0], [22.3, 230.0], [22.4, 231.0], [22.5, 232.0], [22.6, 233.0], [22.7, 234.0], [22.8, 234.0], [22.9, 236.0], [23.0, 238.0], [23.1, 241.0], [23.2, 242.0], [23.3, 243.0], [23.4, 243.0], [23.5, 244.0], [23.6, 245.0], [23.7, 246.0], [23.8, 247.0], [23.9, 248.0], [24.0, 250.0], [24.1, 252.0], [24.2, 253.0], [24.3, 255.0], [24.4, 257.0], [24.5, 258.0], [24.6, 258.0], [24.7, 260.0], [24.8, 261.0], [24.9, 262.0], [25.0, 262.0], [25.1, 264.0], [25.2, 265.0], [25.3, 266.0], [25.4, 267.0], [25.5, 268.0], [25.6, 269.0], [25.7, 270.0], [25.8, 270.0], [25.9, 272.0], [26.0, 274.0], [26.1, 275.0], [26.2, 276.0], [26.3, 277.0], [26.4, 278.0], [26.5, 279.0], [26.6, 280.0], [26.7, 281.0], [26.8, 282.0], [26.9, 283.0], [27.0, 283.0], [27.1, 284.0], [27.2, 285.0], [27.3, 286.0], [27.4, 287.0], [27.5, 287.0], [27.6, 288.0], [27.7, 289.0], [27.8, 290.0], [27.9, 291.0], [28.0, 291.0], [28.1, 291.0], [28.2, 293.0], [28.3, 295.0], [28.4, 295.0], [28.5, 296.0], [28.6, 296.0], [28.7, 297.0], [28.8, 298.0], [28.9, 298.0], [29.0, 298.0], [29.1, 299.0], [29.2, 300.0], [29.3, 300.0], [29.4, 301.0], [29.5, 302.0], [29.6, 302.0], [29.7, 303.0], [29.8, 304.0], [29.9, 305.0], [30.0, 306.0], [30.1, 306.0], [30.2, 307.0], [30.3, 308.0], [30.4, 309.0], [30.5, 309.0], [30.6, 310.0], [30.7, 311.0], [30.8, 312.0], [30.9, 314.0], [31.0, 314.0], [31.1, 315.0], [31.2, 316.0], [31.3, 317.0], [31.4, 317.0], [31.5, 319.0], [31.6, 320.0], [31.7, 321.0], [31.8, 321.0], [31.9, 322.0], [32.0, 323.0], [32.1, 325.0], [32.2, 325.0], [32.3, 326.0], [32.4, 328.0], [32.5, 329.0], [32.6, 330.0], [32.7, 332.0], [32.8, 332.0], [32.9, 332.0], [33.0, 334.0], [33.1, 335.0], [33.2, 336.0], [33.3, 337.0], [33.4, 338.0], [33.5, 339.0], [33.6, 340.0], [33.7, 342.0], [33.8, 343.0], [33.9, 345.0], [34.0, 346.0], [34.1, 348.0], [34.2, 348.0], [34.3, 349.0], [34.4, 350.0], [34.5, 351.0], [34.6, 352.0], [34.7, 354.0], [34.8, 355.0], [34.9, 355.0], [35.0, 356.0], [35.1, 357.0], [35.2, 359.0], [35.3, 360.0], [35.4, 361.0], [35.5, 362.0], [35.6, 363.0], [35.7, 365.0], [35.8, 367.0], [35.9, 368.0], [36.0, 369.0], [36.1, 370.0], [36.2, 371.0], [36.3, 373.0], [36.4, 376.0], [36.5, 378.0], [36.6, 380.0], [36.7, 382.0], [36.8, 384.0], [36.9, 386.0], [37.0, 386.0], [37.1, 388.0], [37.2, 389.0], [37.3, 391.0], [37.4, 392.0], [37.5, 395.0], [37.6, 397.0], [37.7, 400.0], [37.8, 402.0], [37.9, 404.0], [38.0, 404.0], [38.1, 407.0], [38.2, 408.0], [38.3, 411.0], [38.4, 412.0], [38.5, 413.0], [38.6, 414.0], [38.7, 414.0], [38.8, 416.0], [38.9, 418.0], [39.0, 418.0], [39.1, 422.0], [39.2, 424.0], [39.3, 426.0], [39.4, 428.0], [39.5, 429.0], [39.6, 430.0], [39.7, 433.0], [39.8, 434.0], [39.9, 437.0], [40.0, 438.0], [40.1, 439.0], [40.2, 440.0], [40.3, 442.0], [40.4, 443.0], [40.5, 445.0], [40.6, 446.0], [40.7, 447.0], [40.8, 449.0], [40.9, 450.0], [41.0, 451.0], [41.1, 452.0], [41.2, 453.0], [41.3, 454.0], [41.4, 455.0], [41.5, 456.0], [41.6, 458.0], [41.7, 459.0], [41.8, 460.0], [41.9, 461.0], [42.0, 461.0], [42.1, 462.0], [42.2, 464.0], [42.3, 465.0], [42.4, 467.0], [42.5, 469.0], [42.6, 470.0], [42.7, 471.0], [42.8, 475.0], [42.9, 477.0], [43.0, 478.0], [43.1, 480.0], [43.2, 482.0], [43.3, 484.0], [43.4, 488.0], [43.5, 490.0], [43.6, 493.0], [43.7, 496.0], [43.8, 497.0], [43.9, 499.0], [44.0, 501.0], [44.1, 502.0], [44.2, 504.0], [44.3, 505.0], [44.4, 510.0], [44.5, 512.0], [44.6, 513.0], [44.7, 515.0], [44.8, 516.0], [44.9, 517.0], [45.0, 518.0], [45.1, 519.0], [45.2, 520.0], [45.3, 521.0], [45.4, 522.0], [45.5, 526.0], [45.6, 528.0], [45.7, 531.0], [45.8, 533.0], [45.9, 535.0], [46.0, 535.0], [46.1, 536.0], [46.2, 539.0], [46.3, 541.0], [46.4, 542.0], [46.5, 544.0], [46.6, 547.0], [46.7, 548.0], [46.8, 550.0], [46.9, 551.0], [47.0, 552.0], [47.1, 554.0], [47.2, 555.0], [47.3, 556.0], [47.4, 557.0], [47.5, 558.0], [47.6, 560.0], [47.7, 563.0], [47.8, 564.0], [47.9, 565.0], [48.0, 566.0], [48.1, 568.0], [48.2, 568.0], [48.3, 570.0], [48.4, 572.0], [48.5, 573.0], [48.6, 575.0], [48.7, 578.0], [48.8, 578.0], [48.9, 580.0], [49.0, 581.0], [49.1, 582.0], [49.2, 583.0], [49.3, 585.0], [49.4, 586.0], [49.5, 588.0], [49.6, 589.0], [49.7, 591.0], [49.8, 593.0], [49.9, 595.0], [50.0, 597.0], [50.1, 599.0], [50.2, 601.0], [50.3, 603.0], [50.4, 604.0], [50.5, 605.0], [50.6, 606.0], [50.7, 608.0], [50.8, 611.0], [50.9, 612.0], [51.0, 613.0], [51.1, 616.0], [51.2, 618.0], [51.3, 620.0], [51.4, 621.0], [51.5, 623.0], [51.6, 626.0], [51.7, 627.0], [51.8, 628.0], [51.9, 630.0], [52.0, 632.0], [52.1, 633.0], [52.2, 635.0], [52.3, 638.0], [52.4, 639.0], [52.5, 640.0], [52.6, 642.0], [52.7, 644.0], [52.8, 645.0], [52.9, 646.0], [53.0, 649.0], [53.1, 650.0], [53.2, 652.0], [53.3, 655.0], [53.4, 656.0], [53.5, 658.0], [53.6, 658.0], [53.7, 660.0], [53.8, 661.0], [53.9, 663.0], [54.0, 664.0], [54.1, 666.0], [54.2, 668.0], [54.3, 670.0], [54.4, 671.0], [54.5, 672.0], [54.6, 674.0], [54.7, 675.0], [54.8, 676.0], [54.9, 677.0], [55.0, 679.0], [55.1, 680.0], [55.2, 682.0], [55.3, 683.0], [55.4, 686.0], [55.5, 687.0], [55.6, 690.0], [55.7, 693.0], [55.8, 695.0], [55.9, 697.0], [56.0, 700.0], [56.1, 703.0], [56.2, 705.0], [56.3, 708.0], [56.4, 712.0], [56.5, 716.0], [56.6, 720.0], [56.7, 723.0], [56.8, 724.0], [56.9, 726.0], [57.0, 727.0], [57.1, 730.0], [57.2, 731.0], [57.3, 732.0], [57.4, 734.0], [57.5, 735.0], [57.6, 736.0], [57.7, 738.0], [57.8, 739.0], [57.9, 741.0], [58.0, 742.0], [58.1, 744.0], [58.2, 745.0], [58.3, 749.0], [58.4, 751.0], [58.5, 752.0], [58.6, 753.0], [58.7, 754.0], [58.8, 755.0], [58.9, 756.0], [59.0, 757.0], [59.1, 761.0], [59.2, 763.0], [59.3, 765.0], [59.4, 766.0], [59.5, 768.0], [59.6, 771.0], [59.7, 772.0], [59.8, 773.0], [59.9, 775.0], [60.0, 776.0], [60.1, 778.0], [60.2, 779.0], [60.3, 780.0], [60.4, 782.0], [60.5, 785.0], [60.6, 786.0], [60.7, 789.0], [60.8, 790.0], [60.9, 791.0], [61.0, 793.0], [61.1, 794.0], [61.2, 796.0], [61.3, 799.0], [61.4, 800.0], [61.5, 801.0], [61.6, 802.0], [61.7, 802.0], [61.8, 803.0], [61.9, 804.0], [62.0, 805.0], [62.1, 807.0], [62.2, 809.0], [62.3, 812.0], [62.4, 813.0], [62.5, 815.0], [62.6, 818.0], [62.7, 818.0], [62.8, 819.0], [62.9, 820.0], [63.0, 822.0], [63.1, 822.0], [63.2, 826.0], [63.3, 828.0], [63.4, 829.0], [63.5, 830.0], [63.6, 832.0], [63.7, 834.0], [63.8, 835.0], [63.9, 838.0], [64.0, 838.0], [64.1, 841.0], [64.2, 842.0], [64.3, 843.0], [64.4, 845.0], [64.5, 846.0], [64.6, 847.0], [64.7, 848.0], [64.8, 850.0], [64.9, 852.0], [65.0, 853.0], [65.1, 854.0], [65.2, 856.0], [65.3, 857.0], [65.4, 858.0], [65.5, 858.0], [65.6, 859.0], [65.7, 860.0], [65.8, 861.0], [65.9, 862.0], [66.0, 863.0], [66.1, 865.0], [66.2, 866.0], [66.3, 868.0], [66.4, 871.0], [66.5, 873.0], [66.6, 874.0], [66.7, 876.0], [66.8, 877.0], [66.9, 879.0], [67.0, 880.0], [67.1, 881.0], [67.2, 883.0], [67.3, 885.0], [67.4, 886.0], [67.5, 888.0], [67.6, 889.0], [67.7, 890.0], [67.8, 891.0], [67.9, 893.0], [68.0, 897.0], [68.1, 900.0], [68.2, 903.0], [68.3, 905.0], [68.4, 908.0], [68.5, 909.0], [68.6, 910.0], [68.7, 911.0], [68.8, 911.0], [68.9, 913.0], [69.0, 915.0], [69.1, 917.0], [69.2, 919.0], [69.3, 920.0], [69.4, 921.0], [69.5, 923.0], [69.6, 925.0], [69.7, 928.0], [69.8, 931.0], [69.9, 933.0], [70.0, 935.0], [70.1, 938.0], [70.2, 943.0], [70.3, 946.0], [70.4, 948.0], [70.5, 951.0], [70.6, 953.0], [70.7, 959.0], [70.8, 961.0], [70.9, 965.0], [71.0, 968.0], [71.1, 972.0], [71.2, 974.0], [71.3, 976.0], [71.4, 978.0], [71.5, 982.0], [71.6, 985.0], [71.7, 986.0], [71.8, 988.0], [71.9, 991.0], [72.0, 994.0], [72.1, 998.0], [72.2, 1002.0], [72.3, 1006.0], [72.4, 1010.0], [72.5, 1011.0], [72.6, 1014.0], [72.7, 1020.0], [72.8, 1023.0], [72.9, 1025.0], [73.0, 1027.0], [73.1, 1028.0], [73.2, 1035.0], [73.3, 1039.0], [73.4, 1045.0], [73.5, 1050.0], [73.6, 1052.0], [73.7, 1055.0], [73.8, 1059.0], [73.9, 1062.0], [74.0, 1063.0], [74.1, 1066.0], [74.2, 1068.0], [74.3, 1070.0], [74.4, 1073.0], [74.5, 1077.0], [74.6, 1078.0], [74.7, 1080.0], [74.8, 1085.0], [74.9, 1089.0], [75.0, 1090.0], [75.1, 1091.0], [75.2, 1093.0], [75.3, 1095.0], [75.4, 1096.0], [75.5, 1099.0], [75.6, 1102.0], [75.7, 1105.0], [75.8, 1109.0], [75.9, 1111.0], [76.0, 1113.0], [76.1, 1113.0], [76.2, 1116.0], [76.3, 1123.0], [76.4, 1127.0], [76.5, 1130.0], [76.6, 1133.0], [76.7, 1135.0], [76.8, 1141.0], [76.9, 1145.0], [77.0, 1149.0], [77.1, 1154.0], [77.2, 1158.0], [77.3, 1160.0], [77.4, 1162.0], [77.5, 1166.0], [77.6, 1167.0], [77.7, 1171.0], [77.8, 1175.0], [77.9, 1180.0], [78.0, 1182.0], [78.1, 1183.0], [78.2, 1185.0], [78.3, 1187.0], [78.4, 1192.0], [78.5, 1197.0], [78.6, 1199.0], [78.7, 1200.0], [78.8, 1202.0], [78.9, 1205.0], [79.0, 1208.0], [79.1, 1215.0], [79.2, 1222.0], [79.3, 1224.0], [79.4, 1228.0], [79.5, 1230.0], [79.6, 1232.0], [79.7, 1235.0], [79.8, 1238.0], [79.9, 1240.0], [80.0, 1242.0], [80.1, 1246.0], [80.2, 1250.0], [80.3, 1252.0], [80.4, 1254.0], [80.5, 1257.0], [80.6, 1262.0], [80.7, 1268.0], [80.8, 1271.0], [80.9, 1275.0], [81.0, 1280.0], [81.1, 1282.0], [81.2, 1284.0], [81.3, 1286.0], [81.4, 1288.0], [81.5, 1292.0], [81.6, 1296.0], [81.7, 1299.0], [81.8, 1302.0], [81.9, 1305.0], [82.0, 1307.0], [82.1, 1311.0], [82.2, 1314.0], [82.3, 1318.0], [82.4, 1319.0], [82.5, 1324.0], [82.6, 1328.0], [82.7, 1330.0], [82.8, 1331.0], [82.9, 1338.0], [83.0, 1343.0], [83.1, 1346.0], [83.2, 1348.0], [83.3, 1351.0], [83.4, 1354.0], [83.5, 1356.0], [83.6, 1358.0], [83.7, 1363.0], [83.8, 1367.0], [83.9, 1370.0], [84.0, 1375.0], [84.1, 1381.0], [84.2, 1384.0], [84.3, 1388.0], [84.4, 1393.0], [84.5, 1396.0], [84.6, 1402.0], [84.7, 1406.0], [84.8, 1412.0], [84.9, 1414.0], [85.0, 1419.0], [85.1, 1422.0], [85.2, 1425.0], [85.3, 1427.0], [85.4, 1431.0], [85.5, 1432.0], [85.6, 1437.0], [85.7, 1440.0], [85.8, 1446.0], [85.9, 1449.0], [86.0, 1454.0], [86.1, 1457.0], [86.2, 1460.0], [86.3, 1464.0], [86.4, 1468.0], [86.5, 1473.0], [86.6, 1476.0], [86.7, 1479.0], [86.8, 1483.0], [86.9, 1488.0], [87.0, 1491.0], [87.1, 1498.0], [87.2, 1505.0], [87.3, 1510.0], [87.4, 1512.0], [87.5, 1516.0], [87.6, 1522.0], [87.7, 1527.0], [87.8, 1530.0], [87.9, 1537.0], [88.0, 1543.0], [88.1, 1549.0], [88.2, 1556.0], [88.3, 1560.0], [88.4, 1564.0], [88.5, 1569.0], [88.6, 1575.0], [88.7, 1580.0], [88.8, 1585.0], [88.9, 1593.0], [89.0, 1600.0], [89.1, 1608.0], [89.2, 1613.0], [89.3, 1617.0], [89.4, 1625.0], [89.5, 1630.0], [89.6, 1632.0], [89.7, 1637.0], [89.8, 1641.0], [89.9, 1648.0], [90.0, 1652.0], [90.1, 1657.0], [90.2, 1663.0], [90.3, 1669.0], [90.4, 1672.0], [90.5, 1679.0], [90.6, 1682.0], [90.7, 1687.0], [90.8, 1695.0], [90.9, 1699.0], [91.0, 1704.0], [91.1, 1718.0], [91.2, 1724.0], [91.3, 1737.0], [91.4, 1740.0], [91.5, 1749.0], [91.6, 1754.0], [91.7, 1762.0], [91.8, 1769.0], [91.9, 1778.0], [92.0, 1781.0], [92.1, 1783.0], [92.2, 1789.0], [92.3, 1794.0], [92.4, 1801.0], [92.5, 1809.0], [92.6, 1819.0], [92.7, 1839.0], [92.8, 1847.0], [92.9, 1853.0], [93.0, 1868.0], [93.1, 1873.0], [93.2, 1885.0], [93.3, 1889.0], [93.4, 1893.0], [93.5, 1899.0], [93.6, 1912.0], [93.7, 1924.0], [93.8, 1932.0], [93.9, 1945.0], [94.0, 1957.0], [94.1, 1962.0], [94.2, 1968.0], [94.3, 1981.0], [94.4, 1991.0], [94.5, 2007.0], [94.6, 2025.0], [94.7, 2049.0], [94.8, 2062.0], [94.9, 2074.0], [95.0, 2082.0], [95.1, 2099.0], [95.2, 2112.0], [95.3, 2126.0], [95.4, 2145.0], [95.5, 2155.0], [95.6, 2166.0], [95.7, 2174.0], [95.8, 2186.0], [95.9, 2204.0], [96.0, 2218.0], [96.1, 2235.0], [96.2, 2269.0], [96.3, 2290.0], [96.4, 2329.0], [96.5, 2332.0], [96.6, 2352.0], [96.7, 2368.0], [96.8, 2394.0], [96.9, 2409.0], [97.0, 2426.0], [97.1, 2470.0], [97.2, 2520.0], [97.3, 2533.0], [97.4, 2552.0], [97.5, 2561.0], [97.6, 2590.0], [97.7, 2610.0], [97.8, 2650.0], [97.9, 2680.0], [98.0, 2701.0], [98.1, 2737.0], [98.2, 2764.0], [98.3, 2784.0], [98.4, 2815.0], [98.5, 2883.0], [98.6, 2916.0], [98.7, 2973.0], [98.8, 3077.0], [98.9, 3226.0], [99.0, 3271.0], [99.1, 3346.0], [99.2, 3460.0], [99.3, 3517.0], [99.4, 3669.0], [99.5, 3786.0], [99.6, 3996.0], [99.7, 4590.0], [99.8, 4752.0], [99.9, 4893.0], [100.0, 5312.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 955.0, "series": [{"data": [[0.0, 14.0], [600.0, 309.0], [700.0, 283.0], [800.0, 354.0], [900.0, 211.0], [1000.0, 181.0], [1100.0, 164.0], [1200.0, 162.0], [1300.0, 148.0], [1400.0, 135.0], [1500.0, 98.0], [100.0, 955.0], [1600.0, 102.0], [1700.0, 77.0], [1800.0, 60.0], [1900.0, 50.0], [2000.0, 34.0], [2100.0, 39.0], [2200.0, 24.0], [2300.0, 27.0], [2400.0, 17.0], [2500.0, 26.0], [2600.0, 18.0], [2700.0, 18.0], [2800.0, 12.0], [2900.0, 10.0], [3000.0, 4.0], [3100.0, 3.0], [200.0, 564.0], [3300.0, 4.0], [3200.0, 9.0], [3400.0, 8.0], [3500.0, 5.0], [3600.0, 5.0], [3700.0, 2.0], [3800.0, 3.0], [3900.0, 2.0], [4500.0, 5.0], [4400.0, 2.0], [4600.0, 1.0], [300.0, 450.0], [4700.0, 4.0], [4800.0, 4.0], [4900.0, 2.0], [5200.0, 2.0], [5300.0, 1.0], [400.0, 328.0], [500.0, 326.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 677.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2314.0, "series": [{"data": [[0.0, 2314.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2271.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 677.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.621359223300967, "minX": 1.60440156E12, "maxY": 12.0, "series": [{"data": [[1.60440186E12, 12.0], [1.60440168E12, 12.0], [1.60440174E12, 12.0], [1.60440156E12, 11.621359223300967], [1.60440162E12, 12.0], [1.60440192E12, 11.856209150326798], [1.6044018E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440192E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 778.197099790115, "minX": 1.0, "maxY": 4912.0, "series": [{"data": [[8.0, 2744.5], [4.0, 4804.0], [2.0, 4543.0], [1.0, 4806.0], [9.0, 2491.5], [5.0, 1647.6666666666667], [10.0, 1947.6666666666667], [11.0, 1898.6666666666667], [6.0, 1790.0], [12.0, 778.197099790115], [3.0, 4856.0], [7.0, 4912.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.980045610034246, 785.7803116685664]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 882.4666666666667, "minX": 1.60440156E12, "maxY": 1006827.4166666666, "series": [{"data": [[1.60440186E12, 1006827.4166666666], [1.60440168E12, 856897.4666666667], [1.60440174E12, 677041.8333333334], [1.60440156E12, 49376.416666666664], [1.60440162E12, 780516.5333333333], [1.60440192E12, 438581.51666666666], [1.6044018E12, 441826.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440186E12, 7677.2], [1.60440168E12, 7358.616666666667], [1.60440174E12, 9372.916666666666], [1.60440156E12, 882.4666666666667], [1.60440162E12, 6648.716666666666], [1.60440192E12, 4042.9166666666665], [1.6044018E12, 9508.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440192E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 624.8783902012258, "minX": 1.60440156E12, "maxY": 1021.4705882352929, "series": [{"data": [[1.60440186E12, 805.4212328767128], [1.60440168E12, 856.1425178147272], [1.60440174E12, 624.8783902012258], [1.60440156E12, 776.3106796116501], [1.60440162E12, 938.9882506527415], [1.60440192E12, 1021.4705882352929], [1.6044018E12, 676.6439888164024]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440192E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 624.5931758530188, "minX": 1.60440156E12, "maxY": 1020.9847494553374, "series": [{"data": [[1.60440186E12, 804.8984018264844], [1.60440168E12, 855.6389548693593], [1.60440174E12, 624.5931758530188], [1.60440156E12, 776.0388349514564], [1.60440162E12, 938.479112271541], [1.60440192E12, 1020.9847494553374], [1.6044018E12, 676.4501397949671]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440192E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0021786492374727693, "minX": 1.60440156E12, "maxY": 1.145631067961165, "series": [{"data": [[1.60440186E12, 0.0136986301369863], [1.60440168E12, 0.022565320665083155], [1.60440174E12, 0.011373578302712161], [1.60440156E12, 1.145631067961165], [1.60440162E12, 0.020887728459530037], [1.60440192E12, 0.0021786492374727693], [1.6044018E12, 0.012115563839701764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440192E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 61.0, "minX": 1.60440156E12, "maxY": 5312.0, "series": [{"data": [[1.60440186E12, 3556.0], [1.60440168E12, 3689.0], [1.60440174E12, 4728.0], [1.60440156E12, 2578.0], [1.60440162E12, 3877.0], [1.60440192E12, 5312.0], [1.6044018E12, 2897.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440186E12, 132.8929997909069], [1.60440168E12, 132.0], [1.60440174E12, 84.88799918174743], [1.60440156E12, 61.0], [1.60440162E12, 115.6119992685318], [1.60440192E12, 149.27999978065492], [1.6044018E12, 154.33199948787689]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440186E12, 134.3646001672745], [1.60440168E12, 134.41990056276322], [1.60440174E12, 87.0], [1.60440156E12, 61.503200168609624], [1.60440162E12, 118.9665003657341], [1.60440192E12, 150.10800008773805], [1.6044018E12, 155.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440186E12, 133.6629997909069], [1.60440168E12, 132.05949929654597], [1.60440174E12, 86.60399959087371], [1.60440156E12, 61.0], [1.60440162E12, 117.43249954283237], [1.60440192E12, 149.73999989032745], [1.6044018E12, 155.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440186E12, 122.0], [1.60440168E12, 127.0], [1.60440174E12, 76.0], [1.60440156E12, 61.0], [1.60440162E12, 103.0], [1.60440192E12, 145.0], [1.6044018E12, 141.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440186E12, 679.5], [1.60440168E12, 765.5], [1.60440174E12, 348.0], [1.60440156E12, 619.0], [1.60440162E12, 818.0], [1.60440192E12, 751.0], [1.6044018E12, 549.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440192E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 173.0, "minX": 1.0, "maxY": 4805.0, "series": [{"data": [[32.0, 236.5], [2.0, 3509.0], [33.0, 565.0], [34.0, 233.5], [35.0, 278.5], [37.0, 310.0], [36.0, 303.5], [39.0, 300.0], [38.0, 297.5], [41.0, 203.5], [40.0, 217.5], [43.0, 209.0], [44.0, 191.5], [46.0, 247.5], [47.0, 213.0], [3.0, 2784.0], [56.0, 173.0], [61.0, 181.0], [4.0, 1919.0], [5.0, 2086.0], [6.0, 1564.5], [7.0, 1416.0], [8.0, 1446.0], [9.0, 1307.0], [10.0, 1104.0], [11.0, 1074.5], [12.0, 922.0], [13.0, 856.0], [14.0, 824.0], [15.0, 853.0], [16.0, 676.0], [1.0, 4805.0], [17.0, 636.5], [18.0, 596.0], [19.0, 528.5], [20.0, 550.0], [21.0, 676.5], [22.0, 604.5], [23.0, 557.0], [24.0, 451.0], [25.0, 429.0], [26.0, 384.0], [27.0, 433.0], [28.0, 465.0], [29.0, 402.5], [30.0, 362.0], [31.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 173.0, "minX": 1.0, "maxY": 4805.0, "series": [{"data": [[32.0, 236.5], [2.0, 3505.0], [33.0, 565.0], [34.0, 233.5], [35.0, 278.0], [37.0, 310.0], [36.0, 303.5], [39.0, 300.0], [38.0, 297.5], [41.0, 203.5], [40.0, 217.5], [43.0, 209.0], [44.0, 191.0], [46.0, 247.5], [47.0, 213.0], [3.0, 2784.0], [56.0, 173.0], [61.0, 181.0], [4.0, 1918.0], [5.0, 2086.0], [6.0, 1563.0], [7.0, 1414.0], [8.0, 1445.5], [9.0, 1304.0], [10.0, 1102.5], [11.0, 1072.5], [12.0, 922.0], [13.0, 855.0], [14.0, 823.5], [15.0, 853.0], [16.0, 676.0], [1.0, 4805.0], [17.0, 636.5], [18.0, 596.0], [19.0, 528.5], [20.0, 550.0], [21.0, 676.5], [22.0, 604.5], [23.0, 557.0], [24.0, 450.5], [25.0, 429.0], [26.0, 384.0], [27.0, 433.0], [28.0, 465.0], [29.0, 402.0], [30.0, 362.0], [31.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60440156E12, "maxY": 19.05, "series": [{"data": [[1.60440186E12, 14.6], [1.60440168E12, 14.033333333333333], [1.60440174E12, 19.05], [1.60440156E12, 1.9166666666666667], [1.60440162E12, 12.766666666666667], [1.60440192E12, 7.45], [1.6044018E12, 17.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440192E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440156E12, "maxY": 19.05, "series": [{"data": [[1.60440186E12, 14.6], [1.60440168E12, 14.033333333333333], [1.60440174E12, 19.05], [1.60440156E12, 1.7166666666666666], [1.60440162E12, 12.766666666666667], [1.60440192E12, 7.65], [1.6044018E12, 17.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440192E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440156E12, "maxY": 19.05, "series": [{"data": [[1.60440186E12, 14.6], [1.60440168E12, 14.033333333333333], [1.60440174E12, 19.05], [1.60440156E12, 1.7166666666666666], [1.60440162E12, 12.766666666666667], [1.60440192E12, 7.65], [1.6044018E12, 17.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440192E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.60440156E12, "maxY": 19.05, "series": [{"data": [[1.60440186E12, 14.6], [1.60440168E12, 14.033333333333333], [1.60440174E12, 19.05], [1.60440156E12, 1.7166666666666666], [1.60440162E12, 12.766666666666667], [1.60440192E12, 7.65], [1.6044018E12, 17.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440192E12, "title": "Total Transactions Per Second"}},
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

